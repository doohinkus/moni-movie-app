from flask import Flask, render_template, redirect, url_for, json, request, make_response, jsonify
# from dateutil.parser import parse
from key import key
import requests
import json
import urllib
from jac.contrib.flask import JAC




app = Flask(__name__)
app.config['COMPRESSOR_DEBUG'] = app.config.get('DEBUG')
app.config['COMPRESSOR_OUTPUT_DIR'] = './static'
app.config['COMPRESSOR_STATIC_PREFIX'] = '/static'
jac = JAC(app)
# shared stuff
params = {
'api_key' : key
}
# add blue sky studios
# dreamworks
# https://en.wikipedia.org/wiki/Fox_Entertainment_Group include fox
companies = {
'Dreamworks Animation SKG': '521',
'Twentieth Century Fox Film Corp.': '25',
'Fox Searchlight Pictures': '43',
'Fox 2000 Films': '711',
'STX Entertainment': '47729'
}
reverseLookup = {
'521':'Dreamworks Animation SKG',
'25':'Twentieth Century Fox Film Corp.',
'43':'Fox Searchlight Pictures',
'711':'Fox 2000 Films',
'47729':'STX Entertainment'
}
def makeRequest(url, params):
    r = requests.get(url, params=params)
    return json.loads(r.text)
# end shared stuff
# routes ans stuff
@app.route('/', methods=['GET', 'POST'])
def index():
    if not request.form:
        json = makeRequest('https://api.themoviedb.org/3/genre/movie/list?',
        {
        'api_key' : key
        })['genres']
        return render_template('index.html',
           genres=json,
           reverseLookup=reverseLookup,
           companies=companies)
    else:
        json = makeRequest('https://api.themoviedb.org/3/discover/movie?',
          {
           'api_key': key,
           'certification_country': 'US',
           'with_companies': request.form["company"],
           'sort_by': 'popularity.desc'
          }
        )
        return render_template('movies.html',
          movies=json,
          reverseLookup=reverseLookup,
          companies=companies,
          selected=reverseLookup[request.form["company"]]
          )


@app.route('/details/<movieID>', methods=['GET'])
def details(movieID):
    url ="https://api.themoviedb.org/3/movie/"+movieID+"?api_key=" + key + "&language=en-US"
    r = requests.get(url)
    return r.text

@app.route('/search', methods=['GET', 'POST'])
def search():
    params = {
    "api_key": key,
    "language": "en-US",
    "page":"1",
    "include_adult": "false"
    }
    query = urllib.urlencode(params)
    auto_complete_url = "https://api.themoviedb.org/3/search/movie?" + query
    if not request.form:
        return render_template('search.html', auto_complete_url=auto_complete_url, movies=0)
    else:
        movieTitle = request.form["movie"]
        json = makeRequest('https://api.themoviedb.org/3/search/movie?',
          {
           'api_key': key,
           'certification_country': 'US',
           'query': movieTitle,
           'sort_by': 'popularity.desc'
          }
        )
        params = {
        "api_key": key,
        "language": "en-US",
        "page":"1",
        "include_adult": "false"
        }

        query = urllib.urlencode(params)
        auto_complete_url = "https://api.themoviedb.org/3/search/movie?" + query
        return render_template('search.html',
             movies=json,
             auto_complete_url=auto_complete_url,
             movieTitle=movieTitle,
             companies=companies,
             reverseLookup=reverseLookup)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
else:
    app.run(debug=True, host="0.0.0.0", port=8000)
