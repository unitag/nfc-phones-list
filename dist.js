'use strict';

var fs = require('fs'),
	globby = require('globby'),
	Q = require('q');

var SRC_PATH = './data/*.json',
	DEST_PATH = './dist/nfcList';

var nfcList = [];

function readJson(path) {
	return Q.nfcall(fs.readFile, path, 'utf-8').then(function (json) {
		json = JSON.parse(json);
		nfcList = nfcList.concat(json);
	});
}

function writeJson() {
	fs.writeFile(DEST_PATH + '.json', JSON.stringify(nfcList, null, 4), function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('JSON saved to ' + DEST_PATH + '.json');
		}
	});
	fs.writeFile(DEST_PATH + '.min.json', JSON.stringify(nfcList), function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('JSON saved to ' + DEST_PATH + '.min.json');
		}
	});
}

var promise = Q.nfcall(globby, SRC_PATH)
	.invoke('map', readJson).all()
	.then(writeJson);

promise.done();

