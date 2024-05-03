<?php

namespace App\Controller\api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HolidayController extends AbstractController
{
    #[Route('/api/holiday', name: 'app_api_holiday')]
    public function index(): Response
    {
        return $this->render('api/holiday/index.html.twig', [
            'controller_name' => 'HolidayController',
        ]);
    }
}
