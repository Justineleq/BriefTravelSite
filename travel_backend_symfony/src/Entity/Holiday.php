<?php

namespace App\Entity;

use App\Repository\HolidayRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: HolidayRepository::class)]
class Holiday
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column(length: 255)]
    private ?string $Destination = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column]
    private ?int $voyagers = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column]
    private ?int $duration = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $startDate = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column]
    private ?int $price = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $rating = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $hotelDetails = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $locationDetails = null;

    #[Groups('api_holiday_index', 'api_holiday_show')]
    #[ORM\Column(length: 255)]
    private ?string $image = null;

    /**
     * @var Collection<int, category>
     */
    #[Groups('api_holiday_index')]
    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'holidays')]
    private Collection $category;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'holiday')]
    private Collection $users;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->users = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDestination(): ?string
    {
        return $this->Destination;
    }

    public function setDestination(string $Destination): static
    {
        $this->Destination = $Destination;

        return $this;
    }

    public function getVoyagers(): ?int
    {
        return $this->voyagers;
    }

    public function setVoyagers(int $voyagers): static
    {
        $this->voyagers = $voyagers;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): static
    {
        $this->duration = $duration;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): static
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getRating(): ?string
    {
        return $this->rating;
    }

    public function setRating(?string $rating): static
    {
        $this->rating = $rating;

        return $this;
    }

    public function getHotelDetails(): ?string
    {
        return $this->hotelDetails;
    }

    public function setHotelDetails(string $hotelDetails): static
    {
        $this->hotelDetails = $hotelDetails;

        return $this;
    }

    public function getLocationDetails(): ?string
    {
        return $this->locationDetails;
    }

    public function setLocationDetails(string $locationDetails): static
    {
        $this->locationDetails = $locationDetails;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection<int, category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->addHoliday($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            $user->removeHoliday($this);
        }

        return $this;
    }

}
