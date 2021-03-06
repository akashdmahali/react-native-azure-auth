import { extractIdToken } from '../token'

const testIdToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlNTUWRoSTFjS3ZoUUVEU0p4RTJnR1lzNDBRMCJ9.\
eyJhdWQiOiJiNWQxMjBmNi0wNGZiLTQ4MWEtODhmNi1iYzJkZmQ0NGZkYTciLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubG\
luZS5jb20vMzFmMWI3ODktOTBlMy00NDJhLWFjZDItZDZhZThjOGJkYTMxL3YyLjAiLCJpYXQiOjE1MjA1MjQ0NjEsIm5iZiI6MTUyMDUy\
NDQ2MSwiZXhwIjoxNTIwNTI4MzYxLCJhaW8iOiJBVFFBeS84R0FBQUFWRnBvOVJjNENsbW1yUGFacXp4TTkvZ2JGb2hmOEZOZC9wNk14Sk\
Y1SUw5OU9sR0REeTFZcytQeWl6RGk4Y3NtIiwibmFtZSI6IlZsYWRpbWlyIE11cmluIChFeHRlcm4pIiwibm9uY2UiOiJZOWF5YjZoUEpL\
b2ZnQXZMU2xtOUxVVTdOQ1dmMVU2ZFZrdlZwVHRzclBFIiwib2lkIjoiZDQ1OTc4ZjAtOTVmMy00NGQyLWJiOWUtY2U5ODZjM2VkMjc1Ii\
wicHJlZmVycmVkX3VzZXJuYW1lIjoidmxhZGltaXIubXVyaW4uZXh0ZXJuQHBvcnNjaGUuZGlnaXRhbCIsInN1YiI6ImhCa3ZVUmNXZnNy\
SGxzQ2otQkFWcGJTTURPWVFfc2VXTDNuTFQ1RWRJanMiLCJ0aWQiOiIzMWYxYjc4OS05MGUzLTQ0MmEtYWNkMi1kNmFlOGM4YmRhMzEiLCJ\
1dGkiOiI0ejdHd2pQbnNVQ01Bc3VyNzRVTUFBIiwidmVyIjoiMi4wIn0.Uj7bD5SCNpJeQ73dcxi-wijwB2Zld_TudHk3FTYi6jVItobJiA\
xlTeEsFo9NNo14ls_z5_dGA8_O_SIy0OarvmsuicBWQ9N5DAG3Jwxxci399yx4sQwxJko0YoRx7W1Y2H8DeukE66DcQ8hJ3yZzX1xwFyrZ_\
fyzfG5SuIN-mUF9JZN5AvIJSdKJ7SiKKwGUNuz_ytHAumbyIzmv9T0922QdIL7bUB-KWdpo7dfM7wWD7mdGil9IB8_F-ovS2dvTnJafTO5s\
Xi92arsI9e05zNaGr0oEUZknwAI6SOcVXWZlN7D6RSH-vnOMidjHeQvGC3A9MOmrPs3-qEKvo6HVNQ'

describe('token actions', () => {
    it('should correctly extract Id token', () => {
        expect(extractIdToken(testIdToken)).toMatchSnapshot()
    })

    it('should contain user name', () => {
        expect(extractIdToken(testIdToken)).toHaveProperty('preferred_username')
    })    
})
