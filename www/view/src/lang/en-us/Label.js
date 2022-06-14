import Term from 'APPSRC/lang/en-us/Term'
// import Time from 'APPSRC/lang/zh-cn/Time'
import Phrase from 'APPSRC/lang/en-us/Phrase'

const phraseSeperator = ' '

const data = {
  ...Phrase,
  ...Term,

  update_S_: 'Modify {s}',
  retryAfter_N_seconds: 'Retry After {n} Seconds',
  userAvatar: [Phrase.user, Phrase.avatar].join(phraseSeperator),
  userName: [Phrase.user, Phrase.name].join(phraseSeperator),
  getEmailCode: ['Get', Phrase.emailCode].join(phraseSeperator),
  getPhoneCode: ['Get', Phrase.phoneCode].join(phraseSeperator),
  mostSeen: 'Most Seen',
  loginCredential: [Phrase.login, Phrase.credential].join(phraseSeperator),
  CodeFeverPassword: [Phrase.CodeFever, Phrase.password].join(phraseSeperator),
  wechatBind: [Phrase.wechat, Phrase.bind].join(phraseSeperator),
  unbind_P: 'Unbind {p}',

  repositoryID: [Term.repository, Phrase.ID].join(phraseSeperator),
  repositoryName: [Term.repository, Phrase.name].join(phraseSeperator),
  repositoryDescription: [Term.repository, Phrase.description].join(phraseSeperator),
  repositoryURL: [Term.repository, Phrase.url].join(phraseSeperator),
  repositorySlug: [Term.repository, Phrase.slug].join(phraseSeperator),
  repositoryMember: [Term.repository, Term.member].join(phraseSeperator),
  newRepository: [Phrase.new, Term.repository].join(phraseSeperator),
  forkRepository: [Term.fork, Term.repository].join(phraseSeperator),
  unknownRepository: [Phrase.unknown, Term.repository].join(phraseSeperator),
  allRepository: [Phrase.all, Term.repository].join(phraseSeperator),
  deleteRepository: [Phrase.delete, Term.repository].join(phraseSeperator),

  groupID: [Term.group, Phrase.ID].join(phraseSeperator),
  groupName: [Term.group, Phrase.name].join(phraseSeperator),
  groupDescription: [Term.group, Phrase.description].join(phraseSeperator),
  groupURL: [Term.group, Phrase.url].join(phraseSeperator),
  groupSlug: [Term.repository, Phrase.slug].join(phraseSeperator),
  groupMember: [Term.group, Term.member].join(phraseSeperator),
  newGroup: [Phrase.new, Term.group].join(phraseSeperator),
  unknownGroup: [Phrase.unknown, Term.group].join(phraseSeperator),
  deleteGroup: [Phrase.delete, Term.group].join(phraseSeperator),

  inviteMember: [Phrase.invite, Term.member].join(phraseSeperator),
  removeMember: [Phrase.remove, Term.member].join(phraseSeperator),

  forkFrom_S: [Term.fork, 'From: {s}'].join(phraseSeperator),
  updateFrom_S1_To_S2: ['Update From {s1} To {s2}'].join(phraseSeperator),

  repositoryAvatar: [Term.repository, Phrase.icon].join(phraseSeperator),
  groupAvatar: [Term.group, Phrase.icon].join(phraseSeperator),
  basicInfo: 'Basic Info',
  newPasswordConfirm: [Phrase.confirm, Phrase.newPassword].join(phraseSeperator),
  security: 'Security',
  setupNewMFADevice: 'Setup New MFA Device',
  changeMFADevice: 'Change MFA Device',
  removeMFADevice: 'Remove MFA Device',
  mfaCode1: ['First', Phrase.mfaCode].join(phraseSeperator),
  mfaCode2: ['Second', Phrase.mfaCode].join(phraseSeperator),
  commitTime: [Phrase.commit, Phrase.time].join(phraseSeperator),
  copyPath: [Phrase.copy, Phrase.path].join(phraseSeperator),
  copyHash: [Phrase.copy, Term.hash].join(phraseSeperator),
  copyCode: [Phrase.copy, Term.code].join(phraseSeperator),
  lastCommit: [Phrase.last, Term.commit].join(phraseSeperator),
  lastUpdate: [Phrase.last, Phrase.update].join(phraseSeperator),

  updateCreator: [Phrase.update, Phrase.creator].join(phraseSeperator),
  updateRepositoryURL: [Phrase.update, Term.repository, Phrase.url].join(phraseSeperator),
  updateGroupURL: [Phrase.update, Term.group, Phrase.url].join(phraseSeperator),

  webhookSetting: [Term.webhook, Term.setting].join(phraseSeperator),
  createWebhook: [Phrase.create, Term.webhook].join(phraseSeperator),
  updateWebhook: [Phrase.update, Term.webhook].join(phraseSeperator),
  deleteWebhook: [Phrase.delete, Term.webhook].join(phraseSeperator),
  contentType: 'Content Type',
  webhookSecret: 'Secret Key',
  webhookTrigger: 'Trigger Event',
  pushTrigger: 'Just the push event',
  customeTrigger: 'Customized',
  webhookList: 'Webhook List',
  webhookLog: [Phrase.webhook, Phrase.log].join(phraseSeperator),

  createOrigin: [Phrase.create, Phrase.origin].join(phraseSeperator),
  choseCreateOrigin: [Phrase.chose, Phrase.create, Phrase.origin].join(phraseSeperator),
  tagDescription: [Term.tag, Phrase.description].join(phraseSeperator),
  tagName: [Term.tag, Phrase.name].join(phraseSeperator),
  branchName: [Term.branch, Phrase.name].join(phraseSeperator),
  defaultBranch: [Phrase.default, Term.branch].join(phraseSeperator),
  protectedBranch: [Phrase.protected, Term.branch].join(phraseSeperator),
  branchRule: [Phrase.branch, Phrase.rule].join(phraseSeperator),
  allowPush: [Phrase.allow, Phrase.push].join(phraseSeperator),
  allowMerge: [Phrase.allow, Phrase.merge].join(phraseSeperator),
  noData: ['No', Term.data].join(phraseSeperator),
  newBranch: [Phrase.new, Term.branch].join(phraseSeperator),
  newTag: [Phrase.new, Term.tag].join(phraseSeperator),
  deleteBranch: [Phrase.delete, Term.branch].join(phraseSeperator),
  deleteTag: [Phrase.delete, Term.tag].join(phraseSeperator),
  updateTime: [Phrase.update, Term.time].join(phraseSeperator),
  updatedIn: 'Updated At',
  editIn: 'Edited At',
  expandFullFile: [Phrase.expand, Phrase.full, Phrase.file].join(phraseSeperator),
  showDiffOnly: 'Show Diff',
  codeDiff: 'Diff',
  requestCreated: 'Created At',
  requestClosed: 'Closed At',
  requestMerged: 'Merged At',
  createRepository: ['Please', Phrase.create, Term.repository].join(phraseSeperator),

  commitActivity: [Term.commit, Phrase.activity].join(phraseSeperator),
  mergeRequestActivity: [Term.mergeRequest, Phrase.activity].join(phraseSeperator),
  memberActivity: [Term.member, Phrase.activity].join(phraseSeperator),

  addSSHKey: [Phrase.add, Term.SSHKey].join(phraseSeperator),
  emailManage: [Phrase.email, Phrase.manage].join(phraseSeperator),
  memberManage: [Term.member, Phrase.manage].join(phraseSeperator),
  primaryEmail: 'Primary E-mail',
  contactEmail: 'List Of Associated Mailboxes',
  SSHKeyManage: [Term.SSHKey_pl, Phrase.manage].join(phraseSeperator),
  notificationCenter: 'Notification Center',
  notificationReceiveStatus: 'Receive Notification Status',
  unread: 'Unread',

  fileModification: [Term.file, Phrase.modification].join(phraseSeperator),
  fileModificationList: [Phrase.modification, Term.file, Phrase.list].join(phraseSeperator),
  lineAdd: [Term.line, Phrase.add].join(phraseSeperator),
  lineDelete: [Term.line, Phrase.delete].join(phraseSeperator),
  browserFile: [Phrase.browser, Phrase.file].join(phraseSeperator),
  browserUnchangedFIle: [Phrase.browser, Phrase.modification, Phrase.before, Phrase.file].join(phraseSeperator),
  commitHash: [Term.commit, Term.hash].join(phraseSeperator),
  allFiles: [Phrase.all, Phrase.file].join(phraseSeperator),
  openFileTree: [Phrase.open, Term.fileTree].join(phraseSeperator),
  closeFileTree: [Phrase.close, Term.fileTree].join(phraseSeperator),

  requestMerge: [Phrase.request, Phrase.merge].join(phraseSeperator),
  createMergeRequest: [Phrase.create, Term.mergeRequest].join(phraseSeperator),
  closeMergeRequest: [Phrase.close, Term.mergeRequest].join(phraseSeperator),

  more: 'More',
  noMore: 'No More',
  processing: 'Processing',

  IJoined: 'Joined',
  ICreated: 'Created By Me',

  dangerOperation: 'Dangerous Action',
  dangerOperationConfirm: 'Confirm Dangerous Action',
  compareBranch: 'Compare and Continue',
  lastModified: 'Last Modified',
  lastModified_N: '{n}{n, plural, =1 {st}\n=2 {nd}\n=3 {rd}\nother {th}} Revision',

  openMergeRequest: [Phrase.open, Term.mergeRequest].join(phraseSeperator),
  modificationBranch: [Phrase.modification, Term.branch].join(phraseSeperator),
  sourceBranch: [Phrase.source, Term.branch].join(phraseSeperator),
  targetBranch: [Phrase.target, Term.branch].join(phraseSeperator),
  repositoryAdvancedSetting: 'Repository Advanced Settings',
  branchSetting: 'Branch Settings',
  groupAdvancedSetting: 'Group Advanced Settings',
  memberLimitation: [Term.member, Term.limitation].join(phraseSeperator),
  modificationLimitation: [Phrase.modification, Term.limitation].join(phraseSeperator),
  roleID_1: Term.guest,
  roleID_2: Term.reporter,
  roleID_3: Term.developer,
  roleID_4: Term.maintianer,
  roleID_5: Term.owner,
  yourself: 'It\'s you',

  enabledMFA: '2FA Enabled',
  disabledMFA: '2FA Disabled',
  blocked: 'Blocked',
  createTime: 'Created Time',
  addUser: 'Add user',

  statistic: 'Statistic',
  systemResources: 'System Resources',
  diskUsgae: 'Disk Usgae',
  serviceStatus: 'Service Status',

  host: 'Host',
  senderName: 'Sender Name',
  senderAddress: 'Sender Email Address',
  register: 'Register',
  allowRegister: 'Allow Register',

  support: 'Technical Support',
  feedback: 'Submit Feedback',
  contribute: 'Contribute to CodeFever Community',
  about: 'About CodeFever Community',

  pushEvent: 'Push Event',
  changeMemberRole: [Phrase.modification, Term.member, Term.role].join(phraseSeperator),
  createProtectedBranchRule: 'Create protected branch rule',
  changeProtectedBranchRule: 'Update protected branch rule',
  removeProtectedBranchRule: 'remove protected branch rule',
  reviewReviewer: 'Review Code',

  _N_repository: '{n} {n, plural, =0 {' + Term.repository + '}\n=1 {' + Term.repository + '}\nother {' + Term.repository_pl + '}}',
  _N_commit: '{n} {n, plural, =0 {' + Term.commit + '}\n=1 {' + Term.commit + '}\nother {' + Term.commit_pl + '}}',
  _N_branch: '{n} {n, plural, =0 {' + Term.branch + '}\n=1 {' + Term.branch + '}\nother {' + Term.branch_pl + '}}',
  _N_tag: '{n} {n, plural, =0 {' + Term.tag + '}\n=1 {' + Term.tag + '}\nother {' + Term.tag_pl + '}}',
  _N_byte: '{n} {n, plural, =0 {Byte}\n=1 {Byte}\nother {Bytes}}',
  _N_mergeRequest: '{n} {n, plural, =0 {' + Term.mergeRequest + '}\n=1 {' + Term.mergeRequest + '}\nother {' + Term.mergeRequest_pl + '}}',
  _N_member: '{n} {n, plural, =0 {' + Term.member + '}\n=1 {' + Term.member + '}\nother {' + Term.member_pl + '}}'
}

export default { ...data, __namespace__: 'label' }
