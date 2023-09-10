from ftplib import FTP
import os

# Function to read credentials from a text file
def read_credentials(credentials_file):
    with open(credentials_file, 'r') as file:
        lines = file.readlines()
        username = lines[0].strip()  # The first line contains the FTP username
        password = lines[1].strip()  # The second line contains the FTP password
        ftp_server = lines[2].strip()  # The third line contains the FTP server address
    return username, password, ftp_server

# Folders containing the files to upload
folders_to_upload_from = ['Web/css', 'Web/html', 'Web/js', 'Web/php']

# Name of the file containing FTP credentials
ftp_credentials_file = 'Script/ftp_credentials.txt'

# Read FTP credentials from the text file
ftp_username, ftp_password, ftp_server = read_credentials(ftp_credentials_file)

# Create an FTP connection
ftp = FTP(ftp_server, encoding='Latin-1')
ftp.login(ftp_username, ftp_password)

# Function to upload files from a specific folder
def upload_files_from_folder(ftp, folder):
    # Change the current directory to the specified folder
    ftp.cwd(folder.split('/')[-1])
    # Get the list of files to upload
    files = os.listdir(folder)
    # Upload each file
    for file in files:
        # Open the file in read mode
        file_to_upload = open(folder + '/' + file, 'rb')
        # Upload the file
        ftp.storbinary('STOR ' + file, file_to_upload)
        # Close the file
        file_to_upload.close()
    # Change the current directory to the parent directory
    ftp.cwd('..')

# Upload files from each specified folder
for folder in folders_to_upload_from:
    upload_files_from_folder(ftp, folder)

# Close the FTP connection
ftp.quit()

