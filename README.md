![alt text](assets/enhavo/images/enhavo.svg "enhavo")
<br/>
<br/>

Enhavo app edition
-------------------

The app edition only contains basic admin features to edit your own data structure.
Enhavo is a content management system. It's a open source PHP project based on the fullstack Symfony framework and uses awesome Sylius components
to serve a very flexible software, that can handle most of complex data structure with a clean and usability interface.

Installation
------------

```bash
$ composer create-project enhavo/enhavo-app enhavo
$ cd enhavo
$ composer install
$ yarn install
$ yarn routes:dump
$ yarn encore dev
$ bin/console fos:user:create admin@enhavo.com admin@enhavo.com password --super-admin
```

Documentation
-------------

For further information read the [docs](http://docs.enhavo.com)
