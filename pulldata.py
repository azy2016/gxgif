#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""同步数据"""

__author__ = 'three thousand'

import pymysql
import json
import math
import os


def main():
    readData = queryDb("SELECT `obj_id`, `num` FROM `read` WHERE app_id = 5", "count")
    likeData = queryDb("SELECT `obj_id`, `num` FROM `like` WHERE app_id = 5", "count")
    writeDb(readData, likeData)

def queryDb(sql, db):
    db = pymysql.connect("localhost", "root", "root", db)
    cursor = db.cursor()
    cursor.execute(sql)
    data = cursor.fetchall()
    db.close()
    return data

def writeDb(readData, likeData):
    db = pymysql.connect("localhost", "root", "root", "siteapi.com")
    cursor = db.cursor()
    for i in readData:
        cursor.execute("UPDATE `site` SET `read` = {0} WHERE `id` = {1}".format(i[1], i[0]))
    for i in likeData:
        cursor.execute("UPDATE `site` SET `like` = {0} WHERE `id` = {1}".format(i[1], i[0]))
    db.commit()
    db.close()
   

if __name__ == "__main__":
    main()
    