const chalk = require("chalk");
const moment = require("moment");
const axios = require("axios")
const cheerio = require("cheerio")
const { resolve } = require("path")
const util = require("util")
require("moment-duration-format")(moment);

exports.color = (text, color) => {
	return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

exports.random = async(arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.getAdmin = async (conn, msg) => {
	var nganu = await conn.groupMetadata(msg.from);
	a = [];
	for (let i of nganu.participants) {
		if (i.admin == null) continue;
		a.push(i.id);
	}
	return a;
};

exports.convertTime = function (time) {
	return `${moment.duration(Date.now() - time).format("D [hari], H [jam], m [menit], s [detik]")}`;
};

exports.isUrl = (url) => {
	return url.match(
		new RegExp(
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
			"gi"
		)
	);
};

exports.monospace = (ktl) => {
  return "```" + ktl + "```"
}

exports.getRandom = (ext, length = "10") => {
    var result = ""
    var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    var characterLength = character.length
    for (var i = 0; i < length; i++) {
        result += character.charAt(Math.floor(Math.random() * characterLength))
    }
    return `${result}.${ext}`
}

exports.fetchBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url,
			headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchUrl = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.getBuffer = async (url, options) => {
		try {
			options ? options : {};
			const res = await require("axios")({
				method: "get",
				url,
				headers: {
					DNT: 1,
					"Upgrade-Insecure-Request": 1,
				},
				...options,
				responseType: "arraybuffer",
			});
			return res.data;
		} catch (err) {
			return err
		}
	};