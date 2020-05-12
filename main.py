#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""创建json文件"""

__author__ = 'three thousand'

import pymysql
import json
import math
import os

db = pymysql.connect("localhost", "site", "sitemysqlpossward", "siteapi.com")
cursor = db.cursor()

def main():
    data = queryDb("SELECT `id`, `src`, `title` FROM site_gx_gif ORDER BY `id` DESC")
    createJson("content/db.json", data)

def queryDb(sql):
    cursor.execute(sql)
    data = cursor.fetchall()
    return data

def createJson(dir, data):
    items = list(map(lambda x: {"id":x[0], "src":x[1], "title": x[2]}, data))
    with open(dir, 'w', encoding='utf-8') as f:
        json.dump(items, f, ensure_ascii=False)

if __name__ == "__main__":
    main()
    db.close()