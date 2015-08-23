function initTargetIndicator(reachedValue, targetValue) {
	var $indicator = $('.target-indicator'),
		$reachedValueField = $indicator.find('.reached-value'),
		$targetValueField = $indicator.find('.target-value'),
		$remainingValueField = $indicator.find('.remaining-value'),
		$progressBar = $indicator.find('.progress-bar'),
		$slider = $indicator.find('.slider'),
		$percentageMeter = $progressBar.find('.percentage'),
		$percentageMeterText = $progressBar.find('.text'),
		$disclaimer = $indicator.find('.disclaimer');

	function animateReachedValues(reachedValue, targetValue, animationDuration) {
		animationDuration = animationDuration || 2000;

		var percentage = Math.round(reachedValue / targetValue * 100),
			percentageMeterWidth = Math.round($slider.width() * percentage / 100);

		$targetValueField.html(targetValue);

		$percentageMeter.animate({ width: percentageMeterWidth }, animationDuration);
		$percentageMeterText.animate({ left: percentageMeterWidth }, animationDuration);

		$({ someValue: 0 }).animate({ someValue: 10 }, {
			duration: animationDuration,
			step: function( animationPercentage, fx ) {
				var ratio = fx.now / fx.end,
					currentlyReachedValue = Math.round(reachedValue * ratio),
					currentRemainingValue = Math.round(targetValue - reachedValue * ratio);

				$reachedValueField.html(currentlyReachedValue);
				$remainingValueField.html(currentRemainingValue);
			}
		});
	}

	function resetTargetIndicator() {
		$percentageMeter.css({ width: 0 });
		$percentageMeterText.css({ left: 0 });

		$targetValueField.html(targetValue);
		$reachedValueField.html(0);
		$remainingValueField.html(targetValue - reachedValue);
	}

	resetTargetIndicator();
	animateReachedValues(reachedValue, targetValue);
}