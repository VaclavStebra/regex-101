package cz.vasekstebra;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexIntro {
	public static void main(String[] args) {
		matches();
		replace();
	}

	private static void matches() {
		Pattern pattern = Pattern.compile("a(b+)c");
		Matcher matcher = pattern.matcher("abbbc");
		System.out.println(matcher.matches());
		System.out.println(matcher.group(1));

		matcher = pattern.matcher("ac");
		System.out.println(matcher.matches());
	}

	private static void replace() {
		Pattern pattern = Pattern.compile("b+");
		Matcher matcher = pattern.matcher("abbbc");
		System.out.println(matcher.replaceAll("d"));
	}
}
