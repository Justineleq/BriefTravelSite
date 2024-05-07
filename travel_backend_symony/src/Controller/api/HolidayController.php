<?php

namespace App\Controller\api;

use App\Repository\HolidayRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HolidayController extends AbstractController
{
    #[Route('/api/holidays', name: 'app_api_holiday')]
    public function index(HolidayRepository $holidayRepository): Response
    {
        $holidays = $holidayRepository->findAll();

        return $this->json($holidays, 200, [], [
            'controller_name' => 'HolidayController',
        ]);
    }

}
