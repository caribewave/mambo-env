#!/usr/bin/python

import sys
import os
import time
import shutil
import logging
import datetime

if __name__ == '__main__':

    while True:
        time.sleep(1)
        if os.path.isfile('/data/input/trigger.lck'):
            logging.warning('Initializing Gdal2Tiles app - %s' % datetime.datetime.time(datetime.datetime.now()))
            os.remove('/data/input/trigger.lck')
            os.system('gdal2tiles.py input/odm_orthophoto.tif output')
            open('/data/output/trigger.lck', 'a').close()
            logging.warning('Gdal2Tiles app finished at - %s' % datetime.datetime.time(datetime.datetime.now()))
        else:
            logging.warning('Gdal2Tiles noop')
