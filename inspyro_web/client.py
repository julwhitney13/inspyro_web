# client.py
import socket

# create a socket object
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# get local machine name
host = socket.gethostname()

port = 40295

# connection to hostname on the port.
s.connect(('192.168.2.2', port))
while True:
  # Receive no more than 1024 bytes
    tm = s.recv(1024)
    print(tm.decode('utf-8'))

s.close()
