<?php
/**
 * Created by PhpStorm.
 * User: gseidel
 * Date: 2019-04-30
 * Time: 12:22
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomepageController extends AbstractController
{
    public function indexAction()
    {
        return $this->render('homepage/index.html.twig');
    }
}