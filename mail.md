# Common schema definitions Schema

```txt
http://schema.nethserver.org/mail.json
```

Reusable schema definitions

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [mail.json](mail.json "open original schema") |

## Common schema definitions Type

unknown ([Common schema definitions](mail.md))

# Common schema definitions Definitions

## Definitions group mail-destination

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/mail-destination"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group mail-destination-internal

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/mail-destination-internal"}
```

| Property             | Type          | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dtype](#dtype)      | Not specified | Required | cannot be null | [Common schema definitions](mail-defs-internal-mail-destination-properties-destination-type.md "http://schema.nethserver.org/mail.json#/$defs/mail-destination-internal/properties/dtype")     |
| [name](#name)        | `string`      | Required | cannot be null | [Common schema definitions](mail-defs-internal-mail-destination-properties-object-name.md "http://schema.nethserver.org/mail.json#/$defs/mail-destination-internal/properties/name")           |
| [ui\_name](#ui_name) | `string`      | Optional | cannot be null | [Common schema definitions](mail-defs-internal-mail-destination-properties-object-name-for-ui.md "http://schema.nethserver.org/mail.json#/$defs/mail-destination-internal/properties/ui_name") |

### dtype



`dtype`

*   is required

*   Type: unknown ([Destination type](mail-defs-internal-mail-destination-properties-destination-type.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-internal-mail-destination-properties-destination-type.md "http://schema.nethserver.org/mail.json#/$defs/mail-destination-internal/properties/dtype")

#### dtype Type

unknown ([Destination type](mail-defs-internal-mail-destination-properties-destination-type.md))

#### dtype Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"user"`   |             |
| `"group"`  |             |
| `"public"` |             |
| `"apo"`    |             |

### name



`name`

*   is required

*   Type: `string` ([Object name](mail-defs-internal-mail-destination-properties-object-name.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-internal-mail-destination-properties-object-name.md "http://schema.nethserver.org/mail.json#/$defs/mail-destination-internal/properties/name")

#### name Type

`string` ([Object name](mail-defs-internal-mail-destination-properties-object-name.md))

#### name Constraints

**minimum length**: the minimum number of characters for this string is: `1`

### ui\_name

String representation of the mail destination for display purpose

`ui_name`

*   is optional

*   Type: `string` ([Object name for UI](mail-defs-internal-mail-destination-properties-object-name-for-ui.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-internal-mail-destination-properties-object-name-for-ui.md "http://schema.nethserver.org/mail.json#/$defs/mail-destination-internal/properties/ui_name")

#### ui\_name Type

`string` ([Object name for UI](mail-defs-internal-mail-destination-properties-object-name-for-ui.md))

## Definitions group mail-domain

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/mail-domain"}
```

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                             |
| :-------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [domain](#domain)           | Not specified | Required | cannot be null | [Common schema definitions](mail-defs-mail-domain-properties-mail-domain.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/domain")             |
| [addusers](#addusers)       | `boolean`     | Optional | cannot be null | [Common schema definitions](mail-defs-mail-domain-properties-addusers-flag.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/addusers")         |
| [addgroups](#addgroups)     | `boolean`     | Optional | cannot be null | [Common schema definitions](mail-defs-mail-domain-properties-addgroups-flag.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/addgroups")       |
| [catchall](#catchall)       | Merged        | Optional | cannot be null | [Common schema definitions](mail-defs-mail-domain-properties-catchall-mailbox.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/catchall")      |
| [bccaddr](#bccaddr)         | `string`      | Optional | can be null    | [Common schema definitions](mail-defs-mail-domain-properties-bcc-address.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/bccaddr")            |
| [description](#description) | `string`      | Optional | cannot be null | [Common schema definitions](mail-defs-mail-domain-properties-domain-description.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/description") |

### domain

The standard-compliant domain name

`domain`

*   is required

*   Type: unknown ([Mail domain](mail-defs-mail-domain-properties-mail-domain.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-mail-domain-properties-mail-domain.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/domain")

#### domain Type

unknown ([Mail domain](mail-defs-mail-domain-properties-mail-domain.md))

#### domain Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
\.
```

[try pattern](https://regexr.com/?expression=%5C. "try regular expression with regexr.com")

**(international) hostname**: the string must be an (IDN) hostname, according to [RFC 5890, section 2.3.2.3](https://tools.ietf.org/html/rfc5890 "check the specification")

### addusers

Accept user mailbox names as valid mail addresses

`addusers`

*   is optional

*   Type: `boolean` ([Addusers flag](mail-defs-mail-domain-properties-addusers-flag.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-mail-domain-properties-addusers-flag.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/addusers")

#### addusers Type

`boolean` ([Addusers flag](mail-defs-mail-domain-properties-addusers-flag.md))

### addgroups

Accept LDAP group names as valid mail addresses

`addgroups`

*   is optional

*   Type: `boolean` ([Addgroups flag](mail-defs-mail-domain-properties-addgroups-flag.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-mail-domain-properties-addgroups-flag.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/addgroups")

#### addgroups Type

`boolean` ([Addgroups flag](mail-defs-mail-domain-properties-addgroups-flag.md))

### catchall

Deliver messages for unknown recipients into this mailbox. NULL disables this behavior.

`catchall`

*   is optional

*   Type: merged type ([Catchall mailbox](mail-defs-mail-domain-properties-catchall-mailbox.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-mail-domain-properties-catchall-mailbox.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/catchall")

#### catchall Type

merged type ([Catchall mailbox](mail-defs-mail-domain-properties-catchall-mailbox.md))

one (and only one) of

*   [No catchall](mail-defs-mail-domain-properties-catchall-mailbox-oneof-no-catchall.md "check type definition")

*   [Internal mail destination](mail-defs-internal-mail-destination.md "check type definition")

### bccaddr

Send a blind carbon copy of domain inbound messages to this email address. NULL disables this behavior.

`bccaddr`

*   is optional

*   Type: `string` ([BCC address](mail-defs-mail-domain-properties-bcc-address.md))

*   can be null

*   defined in: [Common schema definitions](mail-defs-mail-domain-properties-bcc-address.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/bccaddr")

#### bccaddr Type

`string` ([BCC address](mail-defs-mail-domain-properties-bcc-address.md))

#### bccaddr Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

### description

Free textual description of the domain purpose

`description`

*   is optional

*   Type: `string` ([Domain description](mail-defs-mail-domain-properties-domain-description.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-mail-domain-properties-domain-description.md "http://schema.nethserver.org/mail.json#/$defs/mail-domain/properties/description")

#### description Type

`string` ([Domain description](mail-defs-mail-domain-properties-domain-description.md))

## Definitions group mail-address

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/mail-address"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group mail-address-base

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/mail-address-base"}
```

| Property                               | Type          | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [description](#description-1)          | `string`      | Optional | cannot be null | [Common schema definitions](mail-defs-base-mail-address-schema-properties-description.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/description")                |
| [domain](#domain-1)                    | `string`      | Optional | cannot be null | [Common schema definitions](mail-defs-base-mail-address-schema-properties-address-domain-part.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/domain")             |
| [local](#local)                        | `string`      | Required | cannot be null | [Common schema definitions](mail-defs-base-mail-address-schema-properties-address-local-part.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/local")               |
| [atype](#atype)                        | `string`      | Required | cannot be null | [Common schema definitions](mail-defs-base-mail-address-schema-properties-address-type.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/atype")                     |
| [destinations](#destinations)          | `array`       | Optional | cannot be null | [Common schema definitions](mail-defs-base-mail-address-schema-properties-destinations.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/destinations")              |
| [delete\_forbidden](#delete_forbidden) | Not specified | Optional | cannot be null | [Common schema definitions](mail-defs-base-mail-address-schema-properties-delete-forbidden-flag.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/delete_forbidden") |
| [internal](#internal)                  | `boolean`     | Optional | cannot be null | [Common schema definitions](mail-defs-base-mail-address-schema-properties-internal.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/internal")                      |

### description



`description`

*   is optional

*   Type: `string` ([Description](mail-defs-base-mail-address-schema-properties-description.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-base-mail-address-schema-properties-description.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/description")

#### description Type

`string` ([Description](mail-defs-base-mail-address-schema-properties-description.md))

### domain



`domain`

*   is optional

*   Type: `string` ([Address domain part](mail-defs-base-mail-address-schema-properties-address-domain-part.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-base-mail-address-schema-properties-address-domain-part.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/domain")

#### domain Type

`string` ([Address domain part](mail-defs-base-mail-address-schema-properties-address-domain-part.md))

#### domain Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
\.
```

[try pattern](https://regexr.com/?expression=%5C. "try regular expression with regexr.com")

**(international) hostname**: the string must be an (IDN) hostname, according to [RFC 5890, section 2.3.2.3](https://tools.ietf.org/html/rfc5890 "check the specification")

### local



`local`

*   is required

*   Type: `string` ([Address local part](mail-defs-base-mail-address-schema-properties-address-local-part.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-base-mail-address-schema-properties-address-local-part.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/local")

#### local Type

`string` ([Address local part](mail-defs-base-mail-address-schema-properties-address-local-part.md))

#### local Constraints

**minimum length**: the minimum number of characters for this string is: `1`

### atype



`atype`

*   is required

*   Type: `string` ([Address type](mail-defs-base-mail-address-schema-properties-address-type.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-base-mail-address-schema-properties-address-type.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/atype")

#### atype Type

`string` ([Address type](mail-defs-base-mail-address-schema-properties-address-type.md))

### destinations



`destinations`

*   is optional

*   Type: an array of merged types ([Mail destination](mail-defs-mail-destination.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-base-mail-address-schema-properties-destinations.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/destinations")

#### destinations Type

an array of merged types ([Mail destination](mail-defs-mail-destination.md))

#### destinations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

### delete\_forbidden

Do not attempt to remove the object

`delete_forbidden`

*   is optional

*   Type: unknown ([Delete forbidden flag](mail-defs-base-mail-address-schema-properties-delete-forbidden-flag.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-base-mail-address-schema-properties-delete-forbidden-flag.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/delete_forbidden")

#### delete\_forbidden Type

unknown ([Delete forbidden flag](mail-defs-base-mail-address-schema-properties-delete-forbidden-flag.md))

#### delete\_forbidden Constraints

**constant**: the value of this property must be equal to:

```json
true
```

### internal

True, if the address cannot receive mail from external/unknown clients

`internal`

*   is optional

*   Type: `boolean` ([Internal](mail-defs-base-mail-address-schema-properties-internal.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-base-mail-address-schema-properties-internal.md "http://schema.nethserver.org/mail.json#/$defs/mail-address-base/properties/internal")

#### internal Type

`boolean` ([Internal](mail-defs-base-mail-address-schema-properties-internal.md))

## Definitions group mail-address-change-request

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/mail-address-change-request"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group spam-folder

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/spam-folder"}
```

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                    |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [enabled](#enabled) | `boolean` | Optional | cannot be null | [Common schema definitions](mail-defs-spam-folder-properties-enable-folder.md "http://schema.nethserver.org/mail.json#/$defs/spam-folder/properties/enabled") |
| [name](#name-1)     | `string`  | Optional | cannot be null | [Common schema definitions](mail-defs-spam-folder-properties-folder-name.md "http://schema.nethserver.org/mail.json#/$defs/spam-folder/properties/name")      |

### enabled



`enabled`

*   is optional

*   Type: `boolean` ([Enable folder](mail-defs-spam-folder-properties-enable-folder.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-spam-folder-properties-enable-folder.md "http://schema.nethserver.org/mail.json#/$defs/spam-folder/properties/enabled")

#### enabled Type

`boolean` ([Enable folder](mail-defs-spam-folder-properties-enable-folder.md))

### name



`name`

*   is optional

*   Type: `string` ([Folder name](mail-defs-spam-folder-properties-folder-name.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-spam-folder-properties-folder-name.md "http://schema.nethserver.org/mail.json#/$defs/spam-folder/properties/name")

#### name Type

`string` ([Folder name](mail-defs-spam-folder-properties-folder-name.md))

#### name Constraints

**minimum length**: the minimum number of characters for this string is: `1`

## Definitions group spam-retention

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/spam-retention"}
```

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                                             |
| :---------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [value](#value)   | `integer` | Required | cannot be null | [Common schema definitions](mail-defs-spam-retention-properties-value-of-retention.md "http://schema.nethserver.org/mail.json#/$defs/spam-retention/properties/value") |
| [custom](#custom) | `boolean` | Optional | cannot be null | [Common schema definitions](mail-defs-spam-retention-properties-custom-limit.md "http://schema.nethserver.org/mail.json#/$defs/spam-retention/properties/custom")      |

### value

Number of days

`value`

*   is required

*   Type: `integer` ([Value of retention](mail-defs-spam-retention-properties-value-of-retention.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-spam-retention-properties-value-of-retention.md "http://schema.nethserver.org/mail.json#/$defs/spam-retention/properties/value")

#### value Type

`integer` ([Value of retention](mail-defs-spam-retention-properties-value-of-retention.md))

#### value Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### custom

If true, the quota limit for the mailbox differs from the default limit

`custom`

*   is optional

*   Type: `boolean` ([Custom limit](mail-defs-spam-retention-properties-custom-limit.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-spam-retention-properties-custom-limit.md "http://schema.nethserver.org/mail.json#/$defs/spam-retention/properties/custom")

#### custom Type

`boolean` ([Custom limit](mail-defs-spam-retention-properties-custom-limit.md))

## Definitions group quota-status

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/quota-status"}
```

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                    |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [limit](#limit)     | `integer` | Required | cannot be null | [Common schema definitions](mail-defs-quota-status-properties-limit.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/limit")         |
| [value](#value-1)   | `integer` | Optional | cannot be null | [Common schema definitions](mail-defs-quota-status-properties-value.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/value")         |
| [percent](#percent) | `integer` | Optional | cannot be null | [Common schema definitions](mail-defs-quota-status-properties-percent.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/percent")     |
| [custom](#custom-1) | `boolean` | Optional | cannot be null | [Common schema definitions](mail-defs-quota-status-properties-custom-limit.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/custom") |

### limit

Quota limit (MiB)

`limit`

*   is required

*   Type: `integer` ([Limit](mail-defs-quota-status-properties-limit.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-quota-status-properties-limit.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/limit")

#### limit Type

`integer` ([Limit](mail-defs-quota-status-properties-limit.md))

#### limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### value

Quota usage value (MiB)

`value`

*   is optional

*   Type: `integer` ([Value](mail-defs-quota-status-properties-value.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-quota-status-properties-value.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/value")

#### value Type

`integer` ([Value](mail-defs-quota-status-properties-value.md))

#### value Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### percent

Quota usage percentage

`percent`

*   is optional

*   Type: `integer` ([Percent](mail-defs-quota-status-properties-percent.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-quota-status-properties-percent.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/percent")

#### percent Type

`integer` ([Percent](mail-defs-quota-status-properties-percent.md))

#### percent Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### custom

If true, the quota limit for the mailbox differs from the default limit

`custom`

*   is optional

*   Type: `boolean` ([Custom limit](mail-defs-quota-status-properties-custom-limit.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-quota-status-properties-custom-limit.md "http://schema.nethserver.org/mail.json#/$defs/quota-status/properties/custom")

#### custom Type

`boolean` ([Custom limit](mail-defs-quota-status-properties-custom-limit.md))

## Definitions group forward

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/forward"}
```

| Property                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                 |
| :------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [destinations](#destinations-1) | `array`   | Required | cannot be null | [Common schema definitions](mail-defs-forward-settings-properties-forward-destinations.md "http://schema.nethserver.org/mail.json#/$defs/forward/properties/destinations") |
| [keepcopy](#keepcopy)           | `boolean` | Optional | cannot be null | [Common schema definitions](mail-defs-forward-settings-properties-keep-message-copy.md "http://schema.nethserver.org/mail.json#/$defs/forward/properties/keepcopy")        |

### destinations



`destinations`

*   is required

*   Type: an array of merged types ([Mail destination](mail-defs-mail-destination.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-forward-settings-properties-forward-destinations.md "http://schema.nethserver.org/mail.json#/$defs/forward/properties/destinations")

#### destinations Type

an array of merged types ([Mail destination](mail-defs-mail-destination.md))

### keepcopy

Keep a local copy of the message

`keepcopy`

*   is optional

*   Type: `boolean` ([Keep message copy](mail-defs-forward-settings-properties-keep-message-copy.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-forward-settings-properties-keep-message-copy.md "http://schema.nethserver.org/mail.json#/$defs/forward/properties/keepcopy")

#### keepcopy Type

`boolean` ([Keep message copy](mail-defs-forward-settings-properties-keep-message-copy.md))

## Definitions group public-mailbox

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/public-mailbox"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                    |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [acls](#acls)       | `array`  | Required | cannot be null | [Common schema definitions](mail-defs-public-mailbox-properties-acl-set.md "http://schema.nethserver.org/mail.json#/$defs/public-mailbox/properties/acls")    |
| [mailbox](#mailbox) | `string` | Required | cannot be null | [Common schema definitions](mail-defs-public-mailbox-properties-mailbox.md "http://schema.nethserver.org/mail.json#/$defs/public-mailbox/properties/mailbox") |

### acls



`acls`

*   is required

*   Type: `object[]` ([ACL descriptor](mail-defs-acl-descriptor.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-public-mailbox-properties-acl-set.md "http://schema.nethserver.org/mail.json#/$defs/public-mailbox/properties/acls")

#### acls Type

`object[]` ([ACL descriptor](mail-defs-acl-descriptor.md))

### mailbox

Mailbox name, unique identifier

`mailbox`

*   is required

*   Type: `string` ([Mailbox](mail-defs-public-mailbox-properties-mailbox.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-public-mailbox-properties-mailbox.md "http://schema.nethserver.org/mail.json#/$defs/public-mailbox/properties/mailbox")

#### mailbox Type

`string` ([Mailbox](mail-defs-public-mailbox-properties-mailbox.md))

#### mailbox Constraints

**minimum length**: the minimum number of characters for this string is: `1`

## Definitions group acl-descriptor

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/acl-descriptor"}
```

| Property            | Type          | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [subject](#subject) | `object`      | Required | cannot be null | [Common schema definitions](mail-defs-acl-subject-descriptor.md "http://schema.nethserver.org/mail.json#/$defs/acl-descriptor/properties/subject")               |
| [stype](#stype)     | Not specified | Required | cannot be null | [Common schema definitions](mail-defs-acl-descriptor-properties-subject-type.md "http://schema.nethserver.org/mail.json#/$defs/acl-descriptor/properties/stype") |
| [rights](#rights)   | `object`      | Required | cannot be null | [Common schema definitions](mail-defs-acl-permissions-descriptor.md "http://schema.nethserver.org/mail.json#/$defs/acl-descriptor/properties/rights")            |

### subject

Describes who can access a public mailbox

`subject`

*   is required

*   Type: `object` ([ACL subject descriptor](mail-defs-acl-subject-descriptor.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-subject-descriptor.md "http://schema.nethserver.org/mail.json#/$defs/acl-descriptor/properties/subject")

#### subject Type

`object` ([ACL subject descriptor](mail-defs-acl-subject-descriptor.md))

#### subject Examples

```json
{
  "dtype": "user",
  "name": "first.user",
  "ui_name": "First User"
}
```

```json
{
  "dtype": "group",
  "name": "sales",
  "ui_name": "Sales Department"
}
```

### stype



`stype`

*   is required

*   Type: unknown ([Subject type](mail-defs-acl-descriptor-properties-subject-type.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-descriptor-properties-subject-type.md "http://schema.nethserver.org/mail.json#/$defs/acl-descriptor/properties/stype")

#### stype Type

unknown ([Subject type](mail-defs-acl-descriptor-properties-subject-type.md))

#### stype Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"none"`  |             |
| `"user"`  |             |
| `"group"` |             |

### rights

Describes what can be done with/on a public mailbox

`rights`

*   is required

*   Type: `object` ([ACL permissions descriptor](mail-defs-acl-permissions-descriptor.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-permissions-descriptor.md "http://schema.nethserver.org/mail.json#/$defs/acl-descriptor/properties/rights")

#### rights Type

`object` ([ACL permissions descriptor](mail-defs-acl-permissions-descriptor.md))

#### rights Examples

```json
{
  "rtype": "ro",
  "values": [
    "lookup",
    "read",
    "write-seen"
  ]
}
```

## Definitions group acl-rights

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/acl-rights"}
```

| Property          | Type          | Required | Nullable       | Defined by                                                                                                                                                                |
| :---------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [rtype](#rtype)   | Not specified | Required | cannot be null | [Common schema definitions](mail-defs-acl-permissions-descriptor-properties-right-type.md "http://schema.nethserver.org/mail.json#/$defs/acl-rights/properties/rtype")    |
| [values](#values) | `array`       | Optional | cannot be null | [Common schema definitions](mail-defs-acl-permissions-descriptor-properties-right-values.md "http://schema.nethserver.org/mail.json#/$defs/acl-rights/properties/values") |

### rtype

High-level permission descriptor. It aggregates a set of fine-grained permissions

`rtype`

*   is required

*   Type: unknown ([Right type](mail-defs-acl-permissions-descriptor-properties-right-type.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-permissions-descriptor-properties-right-type.md "http://schema.nethserver.org/mail.json#/$defs/acl-rights/properties/rtype")

#### rtype Type

unknown ([Right type](mail-defs-acl-permissions-descriptor-properties-right-type.md))

#### rtype Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"ro"`     |             |
| `"rw"`     |             |
| `"full"`   |             |
| `"custom"` |             |

### values

Fine-grained IMAP ACL right set. See RFC 4314, <https://doc.dovecot.org/configuration_manual/acl/#acl-file-format>

`values`

*   is optional

*   Type: `string[]` ([IMAP ACL right](mail-defs-acl-permissions-descriptor-properties-right-values-imap-acl-right.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-permissions-descriptor-properties-right-values.md "http://schema.nethserver.org/mail.json#/$defs/acl-rights/properties/values")

#### values Type

`string[]` ([IMAP ACL right](mail-defs-acl-permissions-descriptor-properties-right-values-imap-acl-right.md))

## Definitions group acl-subject

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/acl-subject"}
```

| Property               | Type          | Required | Nullable       | Defined by                                                                                                                                                                       |
| :--------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dtype](#dtype-1)      | Not specified | Required | cannot be null | [Common schema definitions](mail-defs-acl-subject-descriptor-properties-subject-descriptor-type.md "http://schema.nethserver.org/mail.json#/$defs/acl-subject/properties/dtype") |
| [name](#name-2)        | `string`      | Required | cannot be null | [Common schema definitions](mail-defs-acl-subject-descriptor-properties-subject-name.md "http://schema.nethserver.org/mail.json#/$defs/acl-subject/properties/name")             |
| [ui\_name](#ui_name-1) | `string`      | Optional | cannot be null | [Common schema definitions](mail-defs-acl-subject-descriptor-properties-subject-name-for-ui.md "http://schema.nethserver.org/mail.json#/$defs/acl-subject/properties/ui_name")   |

### dtype



`dtype`

*   is required

*   Type: unknown ([Subject descriptor type](mail-defs-acl-subject-descriptor-properties-subject-descriptor-type.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-subject-descriptor-properties-subject-descriptor-type.md "http://schema.nethserver.org/mail.json#/$defs/acl-subject/properties/dtype")

#### dtype Type

unknown ([Subject descriptor type](mail-defs-acl-subject-descriptor-properties-subject-descriptor-type.md))

#### dtype Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"user"`  |             |
| `"group"` |             |
| `"apo"`   |             |

### name



`name`

*   is required

*   Type: `string` ([Subject name](mail-defs-acl-subject-descriptor-properties-subject-name.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-subject-descriptor-properties-subject-name.md "http://schema.nethserver.org/mail.json#/$defs/acl-subject/properties/name")

#### name Type

`string` ([Subject name](mail-defs-acl-subject-descriptor-properties-subject-name.md))

#### name Constraints

**minimum length**: the minimum number of characters for this string is: `1`

### ui\_name

String representation of the ACL subject

`ui_name`

*   is optional

*   Type: `string` ([Subject name for UI](mail-defs-acl-subject-descriptor-properties-subject-name-for-ui.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-acl-subject-descriptor-properties-subject-name-for-ui.md "http://schema.nethserver.org/mail.json#/$defs/acl-subject/properties/ui_name")

#### ui\_name Type

`string` ([Subject name for UI](mail-defs-acl-subject-descriptor-properties-subject-name-for-ui.md))

## Definitions group bypass-rules

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/bypass-rules"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group bypass-rule

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/bypass-rule"}
```

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                  |
| :---------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [value](#value-2)       | `string`      | Required | cannot be null | [Common schema definitions](mail-defs-bypass-rule-properties-value.md "http://schema.nethserver.org/mail.json#/$defs/bypass-rule/properties/value")         |
| [type](#type)           | Not specified | Required | cannot be null | [Common schema definitions](mail-defs-bypass-rule-properties-type.md "http://schema.nethserver.org/mail.json#/$defs/bypass-rule/properties/type")           |
| [direction](#direction) | Not specified | Required | cannot be null | [Common schema definitions](mail-defs-bypass-rule-properties-direction.md "http://schema.nethserver.org/mail.json#/$defs/bypass-rule/properties/direction") |

### value

Can be a domain, an email address, an IP address or a CIDR network

`value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-bypass-rule-properties-value.md "http://schema.nethserver.org/mail.json#/$defs/bypass-rule/properties/value")

#### value Type

`string`

#### value Constraints

**minimum length**: the minimum number of characters for this string is: `1`

### type

Bypass rule type

`type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-bypass-rule-properties-type.md "http://schema.nethserver.org/mail.json#/$defs/bypass-rule/properties/type")

#### type Type

unknown

### direction

Bypass rule direction

`direction`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-bypass-rule-properties-direction.md "http://schema.nethserver.org/mail.json#/$defs/bypass-rule/properties/direction")

#### direction Type

unknown

#### direction Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"from"` |             |
| `"to"`   |             |

## Definitions group antispam

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/antispam"}
```

| Property                                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :-------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [enabled](#enabled-1)                               | `boolean` | Required | cannot be null | [Common schema definitions](mail-defs-antispam-properties-enabled.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/enabled")                               |
| [spam\_flag\_threshold](#spam_flag_threshold)       | `number`  | Optional | cannot be null | [Common schema definitions](mail-defs-antispam-properties-spam_flag_threshold.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/spam_flag_threshold")       |
| [deny\_message\_threshold](#deny_message_threshold) | `number`  | Optional | cannot be null | [Common schema definitions](mail-defs-antispam-properties-deny_message_threshold.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/deny_message_threshold") |
| [greylist](#greylist)                               | `object`  | Optional | cannot be null | [Common schema definitions](mail-defs-antispam-properties-greylist.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/greylist")                             |
| [prefix\_email\_subject](#prefix_email_subject)     | `object`  | Optional | cannot be null | [Common schema definitions](mail-defs-antispam-properties-prefix-email-subject.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/prefix_email_subject")     |

### enabled

Defines if antispam is enabled

`enabled`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antispam-properties-enabled.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/enabled")

#### enabled Type

`boolean`

### spam\_flag\_threshold

Spam flag threshold

`spam_flag_threshold`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antispam-properties-spam_flag_threshold.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/spam_flag_threshold")

#### spam\_flag\_threshold Type

`number`

### deny\_message\_threshold

Deny message threshold

`deny_message_threshold`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antispam-properties-deny_message_threshold.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/deny_message_threshold")

#### deny\_message\_threshold Type

`number`

### greylist

Greylist configuration

`greylist`

*   is optional

*   Type: `object` ([Greylist](mail-defs-antispam-properties-greylist.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antispam-properties-greylist.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/greylist")

#### greylist Type

`object` ([Greylist](mail-defs-antispam-properties-greylist.md))

### prefix\_email\_subject

Configure if the subject of spam messages are prefixed with a string

`prefix_email_subject`

*   is optional

*   Type: `object` ([Prefix email subject](mail-defs-antispam-properties-prefix-email-subject.md))

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antispam-properties-prefix-email-subject.md "http://schema.nethserver.org/mail.json#/$defs/antispam/properties/prefix_email_subject")

#### prefix\_email\_subject Type

`object` ([Prefix email subject](mail-defs-antispam-properties-prefix-email-subject.md))

## Definitions group antivirus

Reference this group by using

```json
{"$ref":"http://schema.nethserver.org/mail.json#/$defs/antivirus"}
```

| Property                                               | Type          | Required | Nullable       | Defined by                                                                                                                                                                          |
| :----------------------------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [enabled](#enabled-2)                                  | `boolean`     | Required | cannot be null | [Common schema definitions](mail-defs-antivirus-properties-enabled.md "http://schema.nethserver.org/mail.json#/$defs/antivirus/properties/enabled")                                 |
| [clamav\_official\_sigs](#clamav_official_sigs)        | `boolean`     | Optional | cannot be null | [Common schema definitions](mail-defs-antivirus-properties-clamav_official_sigs.md "http://schema.nethserver.org/mail.json#/$defs/antivirus/properties/clamav_official_sigs")       |
| [third\_party\_sigs\_rating](#third_party_sigs_rating) | Not specified | Optional | cannot be null | [Common schema definitions](mail-defs-antivirus-properties-third_party_sigs_rating.md "http://schema.nethserver.org/mail.json#/$defs/antivirus/properties/third_party_sigs_rating") |

### enabled

Defines if antivirus is enabled

`enabled`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antivirus-properties-enabled.md "http://schema.nethserver.org/mail.json#/$defs/antivirus/properties/enabled")

#### enabled Type

`boolean`

### clamav\_official\_sigs

Defines if ClamAV official signatures are enabled

`clamav_official_sigs`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antivirus-properties-clamav_official_sigs.md "http://schema.nethserver.org/mail.json#/$defs/antivirus/properties/clamav_official_sigs")

#### clamav\_official\_sigs Type

`boolean`

### third\_party\_sigs\_rating

Defines the level of third-party signatures enabled. A higher rating means more blocked threats but also a higher probability of false positives. Recommended ratings are 'low' and 'medium'

`third_party_sigs_rating`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Common schema definitions](mail-defs-antivirus-properties-third_party_sigs_rating.md "http://schema.nethserver.org/mail.json#/$defs/antivirus/properties/third_party_sigs_rating")

#### third\_party\_sigs\_rating Type

unknown

#### third\_party\_sigs\_rating Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"low"`    |             |
| `"medium"` |             |
| `"high"`   |             |
