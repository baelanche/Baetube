const videoDescription = document.getElementById("jsVideoDesc");
const commentText = document.getElementsByClassName("comment-text");

String.prototype.replaceAll = function(org, dest) {
  return this.split(org).join(dest);
};

function descReplace() {
  videoDescription.innerHTML = videoDescription.innerHTML.replaceAll(
    "\r",
    "<br/>"
  );
  videoDescription.innerHTML = videoDescription.innerHTML.replaceAll(
    "\n",
    "<br/>"
  );
}

function textReplace() {
  for (let i = 0; i < commentText.length; i++) {
    commentText[i].innerHTML = commentText[i].innerHTML.replaceAll(
      "\r",
      "<br/>"
    );
    commentText[i].innerHTML = commentText[i].innerHTML.replaceAll(
      "\n",
      "<br/>"
    );
  }
}

function init() {
  descReplace();
  textReplace();
}

init();
