# client.py  
import socket

# create a socket object
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 

# get local machine name
host = socket.gethostname()                           

port = input('Port: ') 

# connection to hostname on the port.
s.connect(('10.42.0.20', port))                               
while True:
# Receive no more than 1024 bytes
  tm = s.recv(1024)                                 
  print tm.decode('utf-8')
s.close()

