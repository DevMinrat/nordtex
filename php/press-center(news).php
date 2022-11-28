<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
$bIsMainPage= $APPLICATION->GetCurPage(false) == SITE_DIR;
?>

<?if($arParams["USE_RSS"]=="Y"):?>
    <?
    if(method_exists($APPLICATION, 'addheadstring'))
        $APPLICATION->AddHeadString('<link rel="alternate" type="application/rss+xml" title="'.$arResult["FOLDER"].$arResult["URL_TEMPLATES"]["rss"].'" href="'.$arResult["FOLDER"].$arResult["URL_TEMPLATES"]["rss"].'" />');
    ?>
    <a href="<?=$arResult["FOLDER"].$arResult["URL_TEMPLATES"]["rss"]?>" title="rss" target="_self"><img alt="RSS" src="<?=$templateFolder?>/images/gif-light/feed-icon-16x16.gif" border="0" align="right" /></a>
<?endif?>

<?if($arParams["USE_SEARCH"]=="Y"):?>
    <?=GetMessage("SEARCH_LABEL")?><?$APPLICATION->IncludeComponent(
        "bitrix:search.form",
        "flat",
        Array(
            "PAGE" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["search"]
        ),
        $component
    );?>
    <br />
<?endif?>
<?if($arParams["USE_FILTER"]=="Y"):?>
<?endif?>
<?if (!$bIsMainPage){?>
    <section class="intro press-center-intro pci intro-bg"
             style="background-image: url(<?=SITE_TEMPLATE_PATH?>/assets/images/header-img/press-center-bg.jpg);">
             <div class="page-title__wrapper">
        <span class="bracket">“</span>
        <h1 class="page-title">АКТУАЛЬНЫЕ СОБЫТИЯ <br> ИЗ ЖИЗНИ NORDTEX</h1>
        <span class="bracket">”</span>
    </div>
    </section>
    <section class="press-center prc section">
        <div class="container">
        <div class="press-center__main-news">
            <div class="container">
                <div class="pci__inner">
                    <?
                    if (CModule::IncludeModule("iblock")):
                        $test_elements = CIBlockElement::GetList (
                            Array("ACTIVE_FROM", "SORT"=>"ASC"),
                            Array("IBLOCK_ID" => 1),
                            false,
                            Array ("nTopCount" => 1),
                            Array()
                        );

                        while($ar_fields = $test_elements->GetNext())
                        {
                            $img_path = CFile::GetPath($ar_fields["PREVIEW_PICTURE"]);

                            ?>



                            <img class="pci-news__img" src="<?=$img_path?>" alt="">
                            <div class="pci-news__content">
                                <p class="pci-news__date"> <?=FormatDateFromDB($ar_fields["DATE_ACTIVE_FROM"], 'M  DD,  YYYY');?>
                                </p>
                                <h1 class="pci-news__title"><?=$ar_fields['NAME']?></h1>
                                <p class="pci-news__descr"> <?=$ar_fields['PREVIEW_TEXT']?></p>
                                <a class="pci-news__link hollow-btn" href="<?=$ar_fields['DETAIL_PAGE_URL']?>">
                                    ПОДРОБНЕЕ
                                    <div class="arrow-icon">
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                        <?}endif;?>
                </div>
            </div>
        </div>

            <!--        --><?//$APPLICATION->IncludeComponent(
            //            "bitrix:search.title",
            //            "press-tsentr",
            //            Array(
            //                "CATEGORY_0" => array("iblock_content"),
            //                "CATEGORY_0_TITLE" => "",
            //                "CATEGORY_0_iblock_content" => array("1"),
            //                "CHECK_DATES" => "Y",
            //                "CONTAINER_ID" => "title-search",
            //                "INPUT_ID" => "title-search-input",
            //                "NUM_CATEGORIES" => "1",
            //                "ORDER" => "date",
            //                "PAGE" => "#SITE_DIR#search/index.php",
            //                "SHOW_INPUT" => "Y",
            //                "SHOW_OTHERS" => "N",
            //                "TOP_COUNT" => "5",
            //                "USE_LANGUAGE_GUESS" => "Y"
            //            )
            //        );?>




            <?$APPLICATION->IncludeComponent(
                "bitrix:news.list",
                "",
                Array(
                    "IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
                    "IBLOCK_ID" => $arParams["IBLOCK_ID"],
                    "NEWS_COUNT" => $arParams["NEWS_COUNT"],
                    "SORT_BY1" => $arParams["SORT_BY1"],
                    "SORT_ORDER1" => $arParams["SORT_ORDER1"],
                    "SORT_BY2" => $arParams["SORT_BY2"],
                    "SORT_ORDER2" => $arParams["SORT_ORDER2"],
                    "FIELD_CODE" => $arParams["LIST_FIELD_CODE"],
                    "PROPERTY_CODE" => $arParams["LIST_PROPERTY_CODE"],
                    "DETAIL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["detail"],
                    "SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
                    "IBLOCK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"],
                    "DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
                    "SET_TITLE" => $arParams["SET_TITLE"],
                    "SET_LAST_MODIFIED" => $arParams["SET_LAST_MODIFIED"],
                    "MESSAGE_404" => $arParams["MESSAGE_404"],
                    "SET_STATUS_404" => $arParams["SET_STATUS_404"],
                    "SHOW_404" => $arParams["SHOW_404"],
                    "FILE_404" => $arParams["FILE_404"],
                    "INCLUDE_IBLOCK_INTO_CHAIN" => $arParams["INCLUDE_IBLOCK_INTO_CHAIN"],
                    "CACHE_TYPE" => $arParams["CACHE_TYPE"],
                    "CACHE_TIME" => $arParams["CACHE_TIME"],
                    "CACHE_FILTER" => $arParams["CACHE_FILTER"],
                    "CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
                    "DISPLAY_TOP_PAGER" => $arParams["DISPLAY_TOP_PAGER"],
                    "DISPLAY_BOTTOM_PAGER" => $arParams["DISPLAY_BOTTOM_PAGER"],
                    "PAGER_TITLE" => $arParams["PAGER_TITLE"],
                    "PAGER_TEMPLATE" => $arParams["PAGER_TEMPLATE"],
                    "PAGER_SHOW_ALWAYS" => $arParams["PAGER_SHOW_ALWAYS"],
                    "PAGER_DESC_NUMBERING" => $arParams["PAGER_DESC_NUMBERING"],
                    "PAGER_DESC_NUMBERING_CACHE_TIME" => $arParams["PAGER_DESC_NUMBERING_CACHE_TIME"],
                    "PAGER_SHOW_ALL" => $arParams["PAGER_SHOW_ALL"],
                    "PAGER_BASE_LINK_ENABLE" => $arParams["PAGER_BASE_LINK_ENABLE"],
                    "PAGER_BASE_LINK" => $arParams["PAGER_BASE_LINK"],
                    "PAGER_PARAMS_NAME" => $arParams["PAGER_PARAMS_NAME"],
                    "DISPLAY_DATE" => $arParams["DISPLAY_DATE"],
                    "DISPLAY_NAME" => "Y",
                    "DISPLAY_PICTURE" => $arParams["DISPLAY_PICTURE"],
                    "DISPLAY_PREVIEW_TEXT" => $arParams["DISPLAY_PREVIEW_TEXT"],
                    "PREVIEW_TRUNCATE_LEN" => $arParams["PREVIEW_TRUNCATE_LEN"],
                    "ACTIVE_DATE_FORMAT" => $arParams["LIST_ACTIVE_DATE_FORMAT"],
                    "USE_PERMISSIONS" => $arParams["USE_PERMISSIONS"],
                    "GROUP_PERMISSIONS" => $arParams["GROUP_PERMISSIONS"],
                    "FILTER_NAME" => $arParams["FILTER_NAME"],
                    "HIDE_LINK_WHEN_NO_DETAIL" => $arParams["HIDE_LINK_WHEN_NO_DETAIL"],
                    "CHECK_DATES" => $arParams["CHECK_DATES"],
                ),
                $component
            );?>
            <!--        <div class="pagination">-->
            <!--            <a class="pagination-arrow_prev disabled" href="#">-->
            <!--                <svg>-->
            <!--                    <use href="#chevron"></use>-->
            <!--                </svg>-->
            <!--            </a>-->
            <!--            <a class="pagination-link active" href="#">1</a>-->
            <!--            <a class="pagination-link" href="#">2</a>-->
            <!--            <a class="pagination-link" href="#">3</a>-->
            <!--            <a class="pagination-link dots">...</a>-->
            <!--            <a class="pagination-link" href="#">47</a>-->
            <!--            <a class="pagination-arrow_next" href="#">-->
            <!--                <svg>-->
            <!--                    <use href="#chevron"></use>-->
            <!--                </svg>-->
            <!--            </a>-->
            <!--        </div>-->
        </div>
    </section>
<?}else{?>
    <div class="container">
        <div class="main-news__slider splide">
            <div class="splide__track">
                <div class="splide__list">



                    <?$APPLICATION->IncludeComponent(
                        "bitrix:news.list",
                        "",
                        Array(
                            "IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
                            "IBLOCK_ID" => $arParams["IBLOCK_ID"],
                            "NEWS_COUNT" => $arParams["NEWS_COUNT"],
                            "SORT_BY1" => $arParams["SORT_BY1"],
                            "SORT_ORDER1" => $arParams["SORT_ORDER1"],
                            "SORT_BY2" => $arParams["SORT_BY2"],
                            "SORT_ORDER2" => $arParams["SORT_ORDER2"],
                            "FIELD_CODE" => $arParams["LIST_FIELD_CODE"],
                            "PROPERTY_CODE" => $arParams["LIST_PROPERTY_CODE"],
                            "DETAIL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["detail"],
                            "SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
                            "IBLOCK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"],
                            "DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
                            "SET_TITLE" => $arParams["SET_TITLE"],
                            "SET_LAST_MODIFIED" => $arParams["SET_LAST_MODIFIED"],
                            "MESSAGE_404" => $arParams["MESSAGE_404"],
                            "SET_STATUS_404" => $arParams["SET_STATUS_404"],
                            "SHOW_404" => $arParams["SHOW_404"],
                            "FILE_404" => $arParams["FILE_404"],
                            "INCLUDE_IBLOCK_INTO_CHAIN" => $arParams["INCLUDE_IBLOCK_INTO_CHAIN"],
                            "CACHE_TYPE" => $arParams["CACHE_TYPE"],
                            "CACHE_TIME" => $arParams["CACHE_TIME"],
                            "CACHE_FILTER" => $arParams["CACHE_FILTER"],
                            "CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
                            "DISPLAY_TOP_PAGER" => $arParams["DISPLAY_TOP_PAGER"],
                            "DISPLAY_BOTTOM_PAGER" => $arParams["DISPLAY_BOTTOM_PAGER"],
                            "PAGER_TITLE" => $arParams["PAGER_TITLE"],
                            "PAGER_TEMPLATE" => $arParams["PAGER_TEMPLATE"],
                            "PAGER_SHOW_ALWAYS" => $arParams["PAGER_SHOW_ALWAYS"],
                            "PAGER_DESC_NUMBERING" => $arParams["PAGER_DESC_NUMBERING"],
                            "PAGER_DESC_NUMBERING_CACHE_TIME" => $arParams["PAGER_DESC_NUMBERING_CACHE_TIME"],
                            "PAGER_SHOW_ALL" => $arParams["PAGER_SHOW_ALL"],
                            "PAGER_BASE_LINK_ENABLE" => $arParams["PAGER_BASE_LINK_ENABLE"],
                            "PAGER_BASE_LINK" => $arParams["PAGER_BASE_LINK"],
                            "PAGER_PARAMS_NAME" => $arParams["PAGER_PARAMS_NAME"],
                            "DISPLAY_DATE" => $arParams["DISPLAY_DATE"],
                            "DISPLAY_NAME" => "Y",
                            "DISPLAY_PICTURE" => $arParams["DISPLAY_PICTURE"],
                            "DISPLAY_PREVIEW_TEXT" => $arParams["DISPLAY_PREVIEW_TEXT"],
                            "PREVIEW_TRUNCATE_LEN" => $arParams["PREVIEW_TRUNCATE_LEN"],
                            "ACTIVE_DATE_FORMAT" => $arParams["LIST_ACTIVE_DATE_FORMAT"],
                            "USE_PERMISSIONS" => $arParams["USE_PERMISSIONS"],
                            "GROUP_PERMISSIONS" => $arParams["GROUP_PERMISSIONS"],
                            "FILTER_NAME" => $arParams["FILTER_NAME"],
                            "HIDE_LINK_WHEN_NO_DETAIL" => $arParams["HIDE_LINK_WHEN_NO_DETAIL"],
                            "CHECK_DATES" => $arParams["CHECK_DATES"],
                        ),
                        $component
                    );?>
                </div>
            </div>
            <div class="splide__arrows splide__arrows--ltr">
                <button class="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide"
                        aria-controls="splide01-track">
                    <svg>
                        <use href="#arrow-md"></use>
                    </svg>
                </button>
                <button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide"
                        aria-controls="splide01-track">
                    <svg>
                        <use href="#arrow-md"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>



<?}?>
