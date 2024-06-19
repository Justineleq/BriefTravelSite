<?php

namespace App\Controller\api;

use App\Entity\Reservation;
use App\Repository\HolidayRepository;
use App\Repository\ReservationRepository;
use App\Repository\StatusRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/reservation', name: 'app_api_reservation_')]
class ReservationController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(ReservationRepository $reservationRepository): Response
    {
        $reservations =  $reservationRepository->findAll();

        return $this->json(data: $reservations);
    }

    #[Route('/new', name: 'new', methods: ['POST', 'GET'])]
    public function new(
        Request $request, 
        EntityManagerInterface $em, 
        SerializerInterface $serializer, 
        ValidatorInterface $validator,
        StatusRepository $statusRepo,
        HolidayRepository $holidayRepo,
        ): Response
    {
        $reservation = $serializer->deserialize($request->getContent(), Reservation::class, 'json');

        $errors = $validator->validate($reservation);

        if($errors->count())
        {
            $messages = []; 
            foreach($errors as $error)
            {
                $messages[] = $error->getMessage();
            }
            return $this->json($messages, Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            // add default status 
            $status = $statusRepo->findBy(['name' => 'Unread']);

            $reservation->setStatus($status[0]);

            // add holidayId

            $em->persist($reservation);
            $em->flush();

            return $this->json(null, Response::HTTP_CREATED);
        }
    }
}
