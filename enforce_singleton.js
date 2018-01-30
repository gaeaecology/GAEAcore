/*jslint node: true */
"use strict";

if (global._bGAEACoreLoaded)
	throw Error("Looks like you are loading multiple copies of GAEAcore, which is not supported.\nRunnung 'npm dedupe' might help.");

global._bGAEACoreLoaded = true;
