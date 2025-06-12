// 等待整個網頁文件都載入完成後再執行
document.addEventListener('DOMContentLoaded', () => {

    // 找到那個「行動呼籲按鈕」
    const ctaButton = document.querySelector('.cta-button');

    // 找到我們要滾動到的目標區塊
    const gatewaySection = document.querySelector('#gateway');

    // 當按鈕被點擊時，執行以下功能
    ctaButton.addEventListener('click', (event) => {
        // 阻止按鈕的預設跳轉行為
        event.preventDefault(); 

        // 讓視窗平滑地滾動到目標區塊
        gatewaySection.scrollIntoView({
            behavior: 'smooth'
        });
    });

});