import os, traceback
from PIL import Image, ExifTags

def main():
    srcpath = './src-photo'
    destpath = './dest-photo'
    for filename in os.listdir(srcpath):
        s = os.path.join(destpath, filename)
        src = os.path.join(srcpath, filename)
        create_thumb(src, s)

def square_thumb(img, thumb_size):
    THUMB_SIZE = thumb_size
  
    try:
        exif = dict((ExifTags.TAGS[k], v) for k, v in img._getexif().items() if k in ExifTags.TAGS)
        if 'Orientation' in exif:
            if exif['Orientation'] == 3:
                img=img.rotate(180, expand=True)

            elif exif['Orientation'] == 6:
                img=img.rotate(270, expand=True)

            elif exif['Orientation'] == 8:
                img=img.rotate(90, expand=True)

        width, height = img.size

        # square it

        if width > height:
            delta = width - height
            left = int(delta/2)
            upper = 0
            right = height + left
            lower = height
            
        else:
            delta = height - width
            left = 0
            upper = int(delta/2)
            right = width
            lower = width + upper

        img = img.crop((left, upper, right, lower))
        img.thumbnail(THUMB_SIZE, Image.ANTIALIAS)

    except AttributeError:
        img.thumbnail(THUMB_SIZE, Image.ANTIALIAS)

    return img
        
def create_thumb(filepath, filepath_thumbnail):
    try:
        im = Image.open(filepath)
        im = square_thumb(im, (1280, 720))
        im.save(filepath_thumbnail)

    except Exception as e:
        print(traceback.format_exc())

if __name__ == '__main__':
    main()
    