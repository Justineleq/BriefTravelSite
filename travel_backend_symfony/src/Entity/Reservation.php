<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups ('api_reservation_index, api_reservation_new')]
    #[ORM\Column(length: 255)]
    private ?string $Name = null;

    #[Groups ('api_reservation_index, api_reservation_new')]
    #[ORM\Column(length: 255)]
    private ?string $Surname = null;

    #[Groups ('api_reservation_index, api_reservation_new')]
    #[ORM\Column(length: 255)]
    private ?string $Email = null;

    #[Groups ('api_reservation_index, api_reservation_new')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $Message = null;

    #[Groups ('api_reservation_index, api_reservation_new')]
    #[ORM\ManyToOne(inversedBy: 'reservations')]
    private ?Status $status = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    private ?Holiday $holiday = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->Surname;
    }

    public function setSurname(string $Surname): static
    {
        $this->Surname = $Surname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(string $Email): static
    {
        $this->Email = $Email;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->Message;
    }

    public function setMessage(string $Message): static
    {
        $this->Message = $Message;

        return $this;
    }

    public function getStatus(): ?Status
    {
        return $this->status;
    }

    public function setStatus(?Status $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getHoliday(): ?Holiday
    {
        return $this->holiday;
    }

    public function setHoliday(?Holiday $holiday): static
    {
        $this->holiday = $holiday;

        return $this;
    }

}
