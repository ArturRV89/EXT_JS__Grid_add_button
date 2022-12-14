<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit35bba0e9e50e7d8802f5353d9da9c6c0
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit35bba0e9e50e7d8802f5353d9da9c6c0', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit35bba0e9e50e7d8802f5353d9da9c6c0', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit35bba0e9e50e7d8802f5353d9da9c6c0::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
