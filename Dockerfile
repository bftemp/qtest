# This dockerfile configures an instance of Centos 7 to run my Qlik test node app

FROM    centos:centos7

RUN yum install -y epel-release
RUN yum install -y nodejs npm git

RUN git clone https://github.com/bftemp/qtest.git
RUN cd qtest; npm install

EXPOSE  3000
CMD ["node", "/qtest/."]
