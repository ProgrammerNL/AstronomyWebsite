import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
file = open("image.txt", "r")
image_description = file.read()

def send_email(sender_email, sender_password, recipient_email, subject, message, image_path):
    # Create a multipart message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = subject

    # Add message body
    msg.attach(MIMEText(message, 'plain'))

    # Attach image
    with open(image_path, 'rb') as file:
        image_data = file.read()
    image = MIMEImage(image_data, name='image.png')
    msg.attach(image)

    # Connect to Outlook SMTP server
    try:
        server = smtplib.SMTP('smtp.office365.com', 587)
        server.starttls()
        # Login to Outlook server
        server.login(sender_email, sender_password)
        # Send email
        server.sendmail(sender_email, recipient_email, msg.as_string())
        print("Email sent successfully")
    except Exception as e:
        print(f"Failed to send email: {e}")
    finally:
        # Disconnect from the server
        server.quit()

def main():
    sender_email = 'lekkerprogrameren2024@outlook.com'
    sender_password = 'Kr@ssen.12'
    recipient_email = 'lekkerprogrameren20242@outlook.com'
    subject = 'New image of the day!'
    message = 'Hello there! Here is today\'s image from NASA.' + '\n' + image_description
    image_path = 'D:\Apps\Programeren\RandomAPISLol\Astonomony pciture\image.jpg'  # Update with the path to your image file

    send_email(sender_email, sender_password, recipient_email, subject, message, image_path)

if __name__ == "__main__":
    main()
