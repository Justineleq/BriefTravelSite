<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240503095655 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE holiday_category (holiday_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_E1C6E983830A3EC0 (holiday_id), INDEX IDX_E1C6E98312469DE2 (category_id), PRIMARY KEY(holiday_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE holiday_category ADD CONSTRAINT FK_E1C6E983830A3EC0 FOREIGN KEY (holiday_id) REFERENCES holiday (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE holiday_category ADD CONSTRAINT FK_E1C6E98312469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contact ADD status_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E6386BF700BD FOREIGN KEY (status_id) REFERENCES status (id)');
        $this->addSql('CREATE INDEX IDX_4C62E6386BF700BD ON contact (status_id)');
        $this->addSql('ALTER TABLE reservation ADD status_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C849556BF700BD FOREIGN KEY (status_id) REFERENCES status (id)');
        $this->addSql('CREATE INDEX IDX_42C849556BF700BD ON reservation (status_id)');
        $this->addSql('ALTER TABLE user ADD holiday_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649830A3EC0 FOREIGN KEY (holiday_id) REFERENCES holiday (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649830A3EC0 ON user (holiday_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE holiday_category DROP FOREIGN KEY FK_E1C6E983830A3EC0');
        $this->addSql('ALTER TABLE holiday_category DROP FOREIGN KEY FK_E1C6E98312469DE2');
        $this->addSql('DROP TABLE holiday_category');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C849556BF700BD');
        $this->addSql('DROP INDEX IDX_42C849556BF700BD ON reservation');
        $this->addSql('ALTER TABLE reservation DROP status_id');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E6386BF700BD');
        $this->addSql('DROP INDEX IDX_4C62E6386BF700BD ON contact');
        $this->addSql('ALTER TABLE contact DROP status_id');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649830A3EC0');
        $this->addSql('DROP INDEX IDX_8D93D649830A3EC0 ON `user`');
        $this->addSql('ALTER TABLE `user` DROP holiday_id');
    }
}
