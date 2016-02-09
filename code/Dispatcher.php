<?php

namespace ReactExample;

class Dispatcher extends \Dispatcher implements \PermissionProvider {

	const ACTION_STACKSHARECREATOR = 'reactexample';

	/**
	 * @var array
	 */
	public static $allowed_actions = [
		'doSomething'
	];

	/**
	 * @var array
	 */
	private static $action_types = [
		self::ACTION_STACKSHARECREATOR
	];

	// Check minimal member permissions here and include
	public function init() {
		parent::init();
		$member = \Member::currentUser();
		if (!$member) {
			return \Security::permissionFailure();
		}
		\Requirements::css('deploynaut-reactexample/static/style.css');
	}

	/**
	 * @return string
	 */
	public function Link() {
		return \Controller::join_links(parent::Link(), 'react-example');
	}

	/**
	 * @param \SS_HTTPRequest $request
	 *
	 * @return \HTMLText
	 */
	public function index(\SS_HTTPRequest $request) {
		return $this->renderWith(['ReactExample', 'DNRoot']);
	}

	/**
	 * @param string $name
	 *
	 * @return array
	 */
	public function getModel($name) {
		$errors = [];
		return [
			'Errors' => array_unique($errors),
			'FormActionURL' => \Controller::join_links($this->Link(), 'doSomething')
		];
	}

	/**
	 * @param \SS_HTTPRequest $request
	 *
	 * @return \SS_HTTPResponse
	 * @throws \SS_HTTPResponse_Exception
	 */
	public function doSomething(\SS_HTTPRequest $request) {
		$this->checkSecurityToken();

		// @todo - check member/role permissions
		$member = \Member::currentUser();

		$data = $this->trimWhitespace($this->getFormData());
		// @todo - validate the data
		// $errors = $this->validate($data);
		// if ($errors) {
		// return $this->asJSONValidatorErrors(400, $errors);
		// }

		try {
			// @todo do some work in here
		} catch (\Exception $e) {
			$this->httpError(500, $e->getMessage());
		}

		$this->redirectBack();
		return $this->asJSON([
			'SubmittedName' => $data['Name']
		]);
	}
}
