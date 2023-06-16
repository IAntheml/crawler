from lxml import etree
import json
parser = etree.HTMLParser(encoding="utf-8")

tree = etree.parse("XPathTest.html", parser = parser)

glow_token = tree.xpath("//input[@id='glowValidationToken']/@value")[0]

scroll_page = str(glow_token)

print(type(scroll_page))

print(scroll_page)

