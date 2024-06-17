<?php

namespace App\Controller\api;

use App\Entity\Contact;
use App\Repository\ContactRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/contact', name: 'app_api_contact_')]
class ContactController extends AbstractController
{
    
    #[Route('s', name: 'index')]
    public function index(ContactRepository $contactRepository): Response
    {
        $contacts = $contactRepository->findAll();

        return $this->json(data: $contacts, context: ['api_contact_index']);
    }

    #[Route('/new', name: 'new', methods:['POST', 'GET'])]
    public function new(
        Request $request, 
        EntityManagerInterface $em, 
        SerializerInterface $serializer, 
        ValidatorInterface $validator
        ): Response
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
