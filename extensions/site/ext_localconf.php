<?php

use TYPO3\CMS\Extbase\Utility\ExtensionUtility;
defined('TYPO3') or die('Access denied.');
/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['site'] = 'EXT:site/Configuration/RTE/Default.yaml';

/**
 * flux configuration
 */
\FluidTYPO3\Flux\Core::registerProviderExtensionKey('oussema.site', 'Page');
\FluidTYPO3\Flux\Core::registerProviderExtensionKey('oussema.site', 'Content');

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:site/Configuration/TsConfig/Page/All.tsconfig">');

/**
 * extend RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['cke'] = 'EXT:site/Configuration/RTE/Default.yaml';