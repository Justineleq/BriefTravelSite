<?php

namespace App\Controller\api;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactController extends AbstractController
{
    
    #[Route('/api/contact', name: 'app_api_contact')]
    public function index(): Response
    {
        return $this->render('api/contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }

    #[Route('/api/contact/new', name: 'app_api_new', methods:['POST', 'GET'])]
    public function new(Request $request, EntityManagerInterface $em, SerializerInterface $serializer, ValidatorInterface $validator): Response
    {
        $contact = $serializer->deserialize($request->getContent(), Contact::class, 'json', context: ['groups' => 'api_contact_new']);

        $errors = $validator->validate($contact);

        if($errors->count()){

        $messages = [];
        foreach ($errors as $error){
            $messages[] = $error->getMessage();
        }
        return $this->json($messages, Response::HTTP_UNPROCESSABLE_ENTITY);

        }else {

            $em->persist($contact);
            $em->flush();

            return $this->json(null, Response::HTTP_CREATED);
        }

    }


}
