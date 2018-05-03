# import the necessary packages
import requests
import cv2

# define the URL to our face detection API
url = "http://localhost:8000/face_detection/detect/"

# load our image and now use the face detection API to find faces in
# images by uploading an image directly
image = cv2.imread("test.jpg")
payload = {"image": open("test.jpg", "rb")}
r = requests.post(url, files=payload).json()
print("test.jpg: {}".format(r))

# loop over the faces and draw them on the image
for (startX, startY, endX, endY) in r["faces"]:
	cv2.rectangle(image, (startX, startY), (endX, endY), (0, 255, 0), 2)

# show the output image
cv2.imshow("test.jpg", image)
cv2.waitKey(0)
