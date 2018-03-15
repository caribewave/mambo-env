#!/bin/sh
ansible-playbook -u mambo -i inventories/production deploy.yml --private-key=${MAMBO_KEY_PATH}