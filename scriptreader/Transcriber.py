import re
from collections import defaultdict
import json

with open('scriptreader/Avengers Infinity War.txt', 'r', encoding='utf-8') as rf:
    lines = rf.readlines()

# defaultdict makes a character exist if it isn't already a property, the lambda function is there to return 0 so it doesn't error and begins at counter 0. stars is the variable that holds the dictionary counter.

# holy cow I made the realization I Need another dictionary after the name.

stars = defaultdict(lambda: {
    'number of lines': 0,
    'number of words': 0,
})

# regex function I made to match everything from the start of the line to the colon(:) excluding \ and [. It also requires an emptoy space on the right side. This is to catch characters speeches such as "Thanos: I am inevitable."
for line in lines:
    line = line.strip()
    matching = re.match(r'^([^:\[]*): (.*)', line)
    if matching:
        name = matching[1]
        stars[name]['number of lines'] += 1

        # Below finds all words by counting spaces and adding 1 to the counter.

        words = matching[2]
        spaces = len(re.findall(r' ', words))
        stars[name]['number of words'] += spaces + 1
        # totalWords += 1
        # This shows how many times they talk, but that'll just mean matching[1] = matching[2]. I want to see how many WORDS are in matching[2]

        stars[name]['name'] = name

# I realized I wasted a ton of time by not having the code more easily accessed. In this case I need to change it from a massive object into an array of dictionaries. I admit a lot of time was wasted figuring this out.

print(stars)

# print(z)



with open('./scriptreader/namecounter.json', 'w', encoding='utf-8') as wf:
    json.dump(stars, wf, indent=2)

#     for key in sorted(stars.keys()):
#         print("%s: %s" % (key, stars[key]), file=wf)


    # print('hi', file=wf)
    # print("%s: %s" % (key, stars[key]))

# for name in stars:
#     print(name, stars[name])

    #     print(name + ': ' + str(stars[name]))
    # else:
    #     pass




# with open('Avengers Infinity War.txt', 'r') as rf:
#     pass