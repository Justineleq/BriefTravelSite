<?php

namespace App\Controller;

use App\Entity\Holiday;
use App\Form\HolidayType;
use App\Repository\HolidayRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/holiday', name: 'app_holiday_')]
class HolidayController extends AbstractController
{
    #[IsGranted('ROLE_ADMIN')]
    #[Route('s', name: 'index', methods: ['GET'])]
    public function index(HolidayRepository $holidayRepository): Response
    {
        return $this->render('holiday/index.html.twig', [
            'holidays' => $holidayRepository->findAll(),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $holiday = new Holiday();
        $form = $this->createForm(HolidayType::class, $holiday);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($holiday);
            $entityManager->flush();

            return $this->redirectToRoute('app_holiday_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('holiday/new.html.twig', [
            'holiday' => $holiday,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Holiday $holiday): Response
    {
        return $this->render('holiday/show.html.twig', [
            'holiday' => $holiday,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Holiday $holiday, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(HolidayType::class, $holiday);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_holiday_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('holiday/edit.html.twig', [
            'holiday' => $holiday,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Holiday $holiday, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$holiday->getId(), $request->getPayload()->get('_token'))) {
            $entityManager->remove($holiday);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_holiday_index', [], Response::HTTP_SEE_OTHER);
    }
}
