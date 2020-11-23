<?php

namespace AwemaPL\StickyParams;

use AwemaPL\BaseJS\AwemaProvider;

class StickyParamsServiceProvider extends AwemaProvider
{

    public function getPackageName(): string
    {
        return 'sticky-params';
    }

    public function getPath(): string
    {
       return __DIR__;
    }
}
