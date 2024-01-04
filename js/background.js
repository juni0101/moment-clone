const images = [
    "bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)]

// html에 이미지 추가함
const bgImage = document.createElement('img');
bgImage.src = `./img/${chosenImage}`
bgImage.id = 'bgImg';

// prepend는 맨앞에 위치하도록하는것 
document.body.prepend(bgImage)