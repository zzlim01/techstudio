const ORDER_LINK = "https://t.me/techstudio_netflix";
const CHANNEL_LINK = "https://t.me/techstudio_netflix";
const SUPPORT_LINK = "https://t.me/Techstudioadmin";

const VERIFICATION_TUTORIAL = "https://www.youtube.com/embed/3SShcTpKUR0";
const VERIFICATION_CODE_SITE = "https://yzmen.4knaifei.cn//#/login?cdk=----";

const HOUSEHOLD_TUTORIAL = "https://www.youtube.com/embed/IIqp5fH_2TM";
const HOUSEHOLD_CODE_SITE = "https://yz.naifei.store/#/login?redirect=/dashboard";

function goOrder() {
  window.open(ORDER_LINK, "_blank");
}

function joinChannel() {
  window.open(CHANNEL_LINK, "_blank");
}

function contactSupport() {
  window.open(SUPPORT_LINK, "_blank");
}

function watchVerification() {
  openVideo("Verification Tutorial", VERIFICATION_TUTORIAL);
}

function getVerificationCode() {
  window.open(VERIFICATION_CODE_SITE, "_blank");
}

function watchHousehold() {
  openVideo("Household Tutorial", HOUSEHOLD_TUTORIAL);
}

function getHouseholdCode() {
  window.open(HOUSEHOLD_CODE_SITE, "_blank");
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

function openVideo(title, videoUrl) {
  document.getElementById("videoTitle").innerText = title;
  document.getElementById("videoIframe").src = videoUrl + "?autoplay=1";
  document.getElementById("videoModal").style.display = "flex";
}

function closeVideo() {
  document.getElementById("videoIframe").src = "";
  document.getElementById("videoModal").style.display = "none";
}