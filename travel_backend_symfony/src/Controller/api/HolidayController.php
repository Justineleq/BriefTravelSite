<?php

namespace App\Controller\api;

use App\Entity\Holiday;
use App\Repository\HolidayRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/holiday', name: 'app_api_')]
class HolidayController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(HolidayRepository $holidayRepository): Response
    {
        $holidays = $holidayRepository->findAll();

        return $this->json($holidays, context: ['groups' => 'api_holiday_index']);
    }

    #[Route('/{id}', name: 'show')]
    public function show(EntityManagerInterface $entityManager, $id): JsonResponse
    {
       $repo = $entityManager->getRepository(Holiday::class);
       $holiday = $repo->findOneBy(['id' => $id]);
       return $this->json($holiday, context: ['groups' => ['api_holiday_index', 'api_holiday_show']]);
    }

}
