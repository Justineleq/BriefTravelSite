<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240604072536 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_holiday (user_id INT NOT NULL, holiday_id INT NOT NULL, INDEX IDX_8497AC3EA76ED395 (user_id), INDEX IDX_8497AC3E830A3EC0 (holiday_id), PRIMARY KEY(user_id, holiday_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_holiday ADD CONSTRAINT FK_8497AC3EA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_holiday ADD CONSTRAINT FK_8497AC3E830A3EC0 FOREIGN KEY (holiday_id) REFERENCES holiday (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_holiday DROP FOREIGN KEY FK_8497AC3EA76ED395');
        $this->addSql('ALTER TABLE user_holiday DROP FOREIGN KEY FK_8497AC3E830A3EC0');
        $this->addSql('DROP TABLE user_holiday');
    }
}
