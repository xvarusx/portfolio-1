<?php

/**
 * Extension Manager/Repository config file for ext "site".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'site',
    'description' => 'main site package',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0-12.4.99',
            'fluid_styled_content' => '12.4.0-12.4.99',
            'rte_ckeditor' => '12.4.0-12.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Oussema\\Site\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'oussema',
    'author_email' => 'oussema.harrabi.pro@hotmail.fr',
    'author_company' => 'oussema',
    'version' => '1.0.0',
];
