<?php

namespace App\Controller\api;

use App\Entity\Holiday;
use App\Repository\HolidayRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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

    #[Route('/{holiday.id}', name: 'show')]
    public function show(Holiday $holiday): Response
    {
        return $this->json(data: $holiday, context: ['groups' => 'api_holiday_index', 'api_holiday_show']);
    
    }

}
