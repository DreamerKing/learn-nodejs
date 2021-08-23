function createImage(name) {
    if (name.match(/\.jpe?g$/)) {
        return new JpgImange(name);
    } else if (name.match(/\.png$/)) {
        return new PngImage(name);
    } else if (name.match(/\.gif$/)) {
        return GifImage(name);
    } else {
        throw new Exception('Unsuported format');
    }
}

function JpgImange(name) {
    console.log(name);
}

function PngImage(name) {
  console.log(name);
}

function GifImage(name) {
  console.log(name);
}


let png = createImage('test.png');
console.log(png);