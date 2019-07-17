import os, traceback
from PIL import Image, ExifTags

def main():
    srcpath = './src-photo-1'
    destpath = './resized-photo'
    for filename in os.listdir(srcpath):
        s = os.path.join(destpath, filename)
        src = os.path.join(srcpath, filename)
        create_thumb(src, s)

def square_thumb(img, thumb_size):
    THUMB_SIZE = thumb_size
  
    try:
        img.thumbnail(THUMB_SIZE, Image.ANTIALIAS)

    except AttributeError:
        img.thumbnail(THUMB_SIZE, Image.ANTIALIAS)

    return img
        
def create_thumb(filepath, filepath_thumbnail):
    try:
        im = Image.open(filepath)
        im = square_thumb(im, (1200, 1600))
        im.save(filepath_thumbnail)

    except Exception as e:
        print(traceback.format_exc())

if __name__ == '__main__':
    main()
    