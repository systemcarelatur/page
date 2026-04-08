import urllib.request
import re

try:
    html = urllib.request.urlopen('https://www.youtube.com/@systemcarelaturlaptoprepair').read().decode('utf-8')
    videos = re.findall(r'"videoId":"([^"]+)"', html)
    seen = set()
    unique_videos = [x for x in videos if not (x in seen or seen.add(x))]
    print("VIDEOS:", unique_videos[:5])
except Exception as e:
    print("ERROR:", e)
