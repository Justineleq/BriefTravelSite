<?php

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups('api_contact_new, api_contact_index')]
    #[ORM\Column(length: 255)]
    private ?string $Name = null;

    #[Groups('api_contact_new, api_contact_index')]
    #[ORM\Column(length: 255)]
    private ?string $Surname = null;

    #[Groups('api_contact_new, api_contact_index')]
    #[ORM\Column(length: 255)]
    private ?string $Email = null;


    #[Groups('api_contact_new')]
    #[ORM\Column(length: 255)]
    private ?string $Subject = null;

    #[Groups('api_contact_new')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $Message = null;

    #[ORM\ManyToOne(inversedBy: 'contacts')]
    private ?status $status = null;

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

    public function getSubject(): ?string
    {
        return $this->Subject;
    }

    public function setSubject(string $Subject): static
    {
        $this->Subject = $Subject;

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

    public function getStatus(): ?status
    {
        return $this->status;
    }

    public function setStatus(?status $status): static
    {
        $this->status = $status;

        return $this;
    }

}
