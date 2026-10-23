// 找到中英文切换按钮
const languageButton = document.getElementById("languageToggle");

// 找到所有同时包含中英文内容的元素
const translatedElements = document.querySelectorAll("[data-en][data-zh]");

// 记录网站当前使用的语言
let currentLanguage = "en";

// 监听按钮的点击操作
languageButton.addEventListener("click", function () {
    // 如果当前是英文，就切换成中文；否则切换成英文
    currentLanguage = currentLanguage === "en" ? "zh" : "en";

    // 更换页面中每一个元素的文字
    translatedElements.forEach(function (element) {
        element.textContent = element.dataset[currentLanguage];
    });

    // 告诉浏览器当前页面使用的语言
    document.documentElement.lang = currentLanguage;

    // 更换按钮上显示的文字
    if (currentLanguage === "en") {
        languageButton.textContent = "中文";
    } else {
        languageButton.textContent = "English";
    }
});