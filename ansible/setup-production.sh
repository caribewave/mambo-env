#!/bin/sh
ansible-playbook -u mambo -i inventories/production site.yml --private-key=${MAMBO_KEY_PATH}