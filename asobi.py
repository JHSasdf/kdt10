import sys
input = sys.stdin.readline
N = int(input().rstrip())
dancePeople = set(["ChongChong"])
for _ in range(N):
    persons = input().rstrip().split(" ")
    if persons[0] in dancePeople or persons[1] in dancePeople:
        dancePeople.add(persons[0])
        dancePeople.add(persons[1])
print(len(dancePeople))

# dancePeople을 set으로 설정하고 총총이를 넣는다.
# 다음에 나오는 문자열을 list에 넣고 set에 포함된 사람이 있을 시
# 다음 사람도 set에 넣고 마지막에 length 출력

# 다음문제
# dictionary 해서 key는 수, value는 횟수로 한다음에 
# 평균은 iterator 하고 key*value / length(),, <== 안됨
# 중앙값은 따로 count를 해야하나?? 
