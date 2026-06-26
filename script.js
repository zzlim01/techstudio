const ORDER_LINK = "https://t.me/TechStudio666bot";
const CHANNEL_LINK = "https://t.me/techstudio_netflix";
const SUPPORT_LINK = "https://t.me/Techstudioadmin";

const VERIFICATION_TUTORIAL = "https://youtube.com";
const VERIFICATION_CODE_SITE = "https://yzmen.4knaifei.cn//#/login?cdk=----";

const HOUSEHOLD_TUTORIAL = "https://youtube.com";
const HOUSEHOLD_CODE_SITE = "https://yz.naifei.store/#/login?redirect=/dashboard";

function goOrder() {
  window.location.href = ORDER_LINK;
}

function joinChannel() {
  window.location.href = CHANNEL_LINK;
}

function contactSupport() {
  window.location.href = SUPPORT_LINK;
}

function watchVerification() {
  window.location.href = VERIFICATION_TUTORIAL;
}

function getVerificationCode() {
  window.location.href = VERIFICATION_CODE_SITE;
}

function watchHousehold() {
  window.location.href = HOUSEHOLD_TUTORIAL;
}

function getHouseholdCode() {
  window.location.href = HOUSEHOLD_CODE_SITE;
}

function openGuide() {
  document.getElementById("guideModal").style.display = "flex";
}

function closeGuide() {
  document.getElementById("guideModal").style.display = "none";
}

function closePopup(){

    document
    .getElementById("welcomePopup")
    .style.display = "none";

}

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").classList.add("hide");
  }, 900);
});